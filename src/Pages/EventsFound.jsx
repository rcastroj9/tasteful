import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardEvent } from '../Components/Card/EventCard';
import { useContextEvents } from '../context/EventsContext';
import { NavLink } from 'react-router-dom';
const Search = () => {
  const { events } = useContextEvents();

//   const [search, setsearch] = useState("28012 Madrid, Spain")

  const calculateCategoryCounts = () => {
    const categoryCounts = {};
    events.forEach(event => {
      if (!categoryCounts[event.category]) {
        categoryCounts[event.category] = 0;
      }
      categoryCounts[event.category]++;
    });
    return categoryCounts;
  };
 
  const [filters, setFilters] = useState([
    {
        title: "Event Categories",
        filter: [
            {
                title: "Team Collaboration",
                count: calculateCategoryCounts()["Team Collaboration"] || "0",
                status: false
            },
            {
                title: "Physical Activity",
                count: calculateCategoryCounts()["Physical Activity"] || "0",
                status: false
            },
            {
                title: "Communication",
                count: calculateCategoryCounts()["Communication"] || "0",
                status: false
            },
            {
                title: "Social Engagement",
                count: calculateCategoryCounts()["Social Engagement"] || "0",
                status: false
            },
            {
                title: "Creative Collaboration",
                count: calculateCategoryCounts()["Creative Collaboration"] || "0",
                status: false
            },
            {
                title: "Professional Development",
                count: calculateCategoryCounts()["Professional Development"] || "0",
                status: false
            },
        ]
    }
    // {
    //     title: "Activity Type",
    //     filter: [
    //         {
    //             title: "Workshops",
    //             count: "5", // Adjust the count as needed
    //             status: false
    //         },
    //         {
    //             title: "Team Sports",
    //             count: "3", // Adjust the count as needed
    //             status: false
    //         },
    //         {
    //             title: "Cooking Classes",
    //             count: "2", // Adjust the count as needed
    //             status: false
    //         },
    //         {
    //             title: "Escape Rooms",
    //             count: "2", // Adjust the count as needed
    //             status: false
    //         },
    //         {
    //             title: "Board Games",
    //             count: "2", // Adjust the count as needed
    //             status: false
    //         },
    //         {
    //             title: "Yoga Classes",
    //             count: "1", // Adjust the count as needed
    //             status: false
    //         },
    //     ]
    // },
    ]);

  const updateFilterStatus = (categoryTitle, filterTitle) => {
    setFilters(prevFilters => {
      return prevFilters.map(category => {
        if (category.title === categoryTitle) {
          return {
            ...category,
            filter: category.filter.map(item => {
              if (item.title === filterTitle) {
                return {
                  ...item,
                  status: !item.status // Toggle status
                };
              }
              return item;
            })
          };
        }
        return category;
      });
    });
    };


  const [ToogleFilter, setToogleFilter] = useState(false)

  const getSelectedCategories = () => {
    const selectedCategories = [];
    filters.forEach(category => {
      category.filter.forEach(item => {
        if (item.status) {
          selectedCategories.push(item.title);
        }
      });
    });
    return selectedCategories;
  };

  const filteredEvents = () => {
    const selectedCategories = getSelectedCategories();
    if (selectedCategories.length === 0) {
      return events; // If no filters are selected, show all events
    }
    return events.filter(event => selectedCategories.includes(event.category));
  };

  return (
    <Fragment>
      <section className='bg-[#F8F8F8] -mt-[88px] lg:-mt-[98px] pt-[100px]'>
        <Container>
          <Row>
            <NavLink to="/" className=''>
              <div className="flex justify-around mb-4">
                <div className="flex items-center justify-center h-[42px] gap-2 px-12 py-2 rounded-full bg-MsoftYellow cursor-pointer">
                  <img src="./../images/search-normal.png" alt="" />
                  <div className='font-medium text__20 text-Mgray'>Change Requirements</div>
                </div>
              </div>
            </NavLink>
            <Col lg={3}>
              <div className={"lg:!w-full h-full lg:!h-auto overflow-auto p-4 rounded-[12px] border border-[#E5E5E5] lg:!left-0 h-full top-0 w-[350px] fixed z-[9999] lg:!z-[2] bg-white lg:!bg-transparent lg:!relative transition-all duration-300 " + (ToogleFilter ? "left-[0]" : "-left-[50rem]")}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className='font-semibold text__16'>Filter by</h4>
                  <div className="cursor-pointer lg:hidden" onClick={()=>setToogleFilter(!ToogleFilter)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {
                    filters.map((category, categoryIndex) => {
                      return <div className="w-full flex flex-wrap gap-3">
                        <h5 className='text__14 font-medium w-full'>{category.title}</h5>

                        {
                          category.filter.map((item, itemIndex) => {
                            return <div className="flex items-center justify-between gap-2 w-full">
                              <div className="flex items-center justify-between gap-2 relative">
                                <input type="checkbox" id="vehicle1" name="filter1" value="Bike" className='absolute -z-[1] opacity-0 left-0 top-0' />
                                <label for="filter1" onClick={() => updateFilterStatus(category.title, item.title)} className={'cursor-pointer w-[15px] h-[15px] rounded-[4px] relative checkboxFIlter ' + (item.status ? "active" : "")}>
                                  <img src="./../images/check.png" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                                </label>
                                <label className='cursor-pointer text__12 text-[#171717] text-nowrap' for="filter1" onClick={() => updateFilterStatus(category.title, item.title)}>{item.title}</label>
                              </div>
                              <div className='text__14 text-[#171717] w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[#F5F5F5]'>{item.count}</div>
                            </div>
                          })
                        }

                      </div>
                    })
                  }

                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text__16 font-medium text-[#171717]">
                  <p>{filteredEvents().length}</p>
                  <p className='text-[#737373]'>Events found</p>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 border !border-[#E5E5E5] rounded-full lg:hidden cursor-pointer" onClick={()=>setToogleFilter(!ToogleFilter)}>
                  <p className='font-medium text__14'>Filter</p>
                  <img src="./../images/filter.svg" alt="" />
                </div>
              </div>

              <Row className='gap-y-6'>
                {filteredEvents().map((obj) => (
                  <Col md={4} key={obj.title}>
                    <CardEvent data={obj} />
                  </Col>
                ))}
              </Row>

              <div className="flex justify-center mt-4">
                <nav aria-label="Page navigation example">
                  <ul className="pagination pagiantionMod gap-2">
                    <li className="page-item">
                      <button className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </button>
                    </li>
                    <li className="page-item active"><button className="page-link">1</button></li>
                    <li className="page-item">
                      <button className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>


        </Container>
      </section>
    </Fragment>
  )
}

export default Search