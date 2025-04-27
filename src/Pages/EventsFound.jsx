import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardEvent } from '../Components/Card/EventCard';

const Search = () => {

//   const [search, setsearch] = useState("28012 Madrid, Spain")

  const listEvents = [
    {
      img: window.origin + "/images/sasffg.png",
      title: "Teamwork Escape Rooms",
      distance: "1.2 km",
      time: "10:00 AM - 10:00 PM",
      like: "150",
      quote: "$600",
      siteLink: "https://teamworkescaperooms.com",
      menuLink: "",
      description: "Solve puzzles and challenges as a team in a fun and interactive escape room experience.",
      bookingDeadline: "4 days in advance",
      reviews: [
          { reviewer: "Rick", comment: "A fantastic bonding experience for our team!", stars: 5 },
          { reviewer: "Lucy", comment: "Great fun, but some puzzles were a bit tricky.", stars: 4 }
      ],
      rating: 4.5,
      category: "Team Collaboration"
    },
    {
      img: window.origin + "/images/sasffg.png",
      title: "Active Sports Arena",
      distance: "1.5 km",
      time: "9:00 AM - 11:00 PM",
      like: "200",
      quote: "$800",
      siteLink: "https://activesportsarena.com",
      menuLink: "",
      description: "A facility offering a range of team sports activities, perfect for team-building exercises.",
      bookingDeadline: "5 days in advance",
      reviews: [
          { reviewer: "John", comment: "This place is excellent for team sports; we had a blast!", stars: 5 },
          { reviewer: "Maya", comment: "Facilities are good, but it's a bit expensive.", stars: 4 }
      ],
      rating: 4.2,
      category: "Physical Activity"
    },
    {
      img: window.origin + "/images/sasffg.png",
      title: "Culinary Classes",
      distance: "0.8 km",
      time: "10:00 AM - 6:00 PM",
      like: "120",
      quote: "$400",
      siteLink: "https://culinaryclasseswithchefmia.com",
      menuLink: "https://culinaryclasseswithchefmia.com/menu",
      description: "Learn to cook together in an interactive environment; ideal for team bonding.",
      bookingDeadline: "3 days in advance",
      reviews: [
          { reviewer: "Sara", comment: "The cooking class was fun and educational!", stars: 5 },
          { reviewer: "Tom", comment: "Great food, but I wish we had more time.", stars: 4 }
      ],
      rating: 4.7,
      category: "Creative Collaboration"
    },
    {
      img: window.origin + "/images/sasffg.png",
      title: "The Game Room",
      distance: "1.0 km",
      time: "12:00 PM - 10:00 PM",
      like: "201",
      quote: "$350",
      siteLink: "https://thegameroom.com",
      menuLink: "",
      description: "Enjoy a variety of board games and snacks, perfect for informal discussions and social engagement.",
      bookingDeadline: "2 days in advance",
      reviews: [
          { reviewer: "Katy", comment: "A great place to unwind and have fun with colleagues.", stars: 4 },
          { reviewer: "Ben", comment: "Many game options, loved it!", stars: 5 }
      ],
      rating: 4.3,
      category: "Communication"
    },
    {
      img: window.origin + "/images/sasffg.png",
      title: "Zen Yoga Studio",
      distance: "1.3 km",
      time: "6:00 AM - 9:00 PM",
      like: "90",
      quote: "$250",
      siteLink: "https://zenyogastudio.com",
      menuLink: "",
      description: "Relax and rejuvenate with group yoga sessions, promoting mindfulness and team wellness.",
      bookingDeadline: "2 days in advance",
      reviews: [
          { reviewer: "Claire", comment: "Perfect for team stress relief and relaxation.", stars: 5 },
          { reviewer: "Mark", comment: "A bit crowded, but otherwise a lovely experience.", stars: 4 }
      ],
      rating: 4.6,
      category: "Physical Activity"
    },
    ];

  const calculateCategoryCounts = () => {
    const categoryCounts = {};
    listEvents.forEach(event => {
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
      return listEvents; // If no filters are selected, show all events
    }
    return listEvents.filter(event => selectedCategories.includes(event.category));
  };

  return (
    <Fragment>
      <section className='bg-[#F8F8F8] -mt-[88px] lg:-mt-[98px] pt-[140px]'>
        <Container>
          <Row>
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
              <div className="flex items-center justify-around">
                <div className="flex items-center justify-center h-[42px] gap-2 px-12 py-2 rounded-full bg-Myellow cursor-pointer">
                  <img src="./../images/search-normal.png" alt="" />
                  <div className='font-medium text__20'>Change Requirements</div>
                </div>
              </div>

              <div className="my-3 flex items-center justify-between">
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
                      <a className="page-link " href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link " href="#">1</a></li>
                    <li className="page-item">
                      <a className="page-link " href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
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