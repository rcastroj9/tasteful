# Tasteful API Server

This is the backend server for the Tasteful application, built with FastAPI.

## Prerequisites

- Python 3.9 or higher
- Poetry (Python package manager)

## Setup

1. Install Poetry if you haven't already:

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

2. Clone the repository and navigate to the server directory:

```bash
cd server
```

3. Install dependencies:

```bash
poetry install
```

4. Activate the virtual environment:

```bash
poetry shell
```

5. Run the server:

```bash
poetry run uvicorn main:app --reload
```

The server will be available at `http://localhost:8000`

## Development

### Running Tests

```bash
poetry run pytest
```

### Code Formatting

```bash
# Format code with black
poetry run black .

# Sort imports with isort
poetry run isort .

# Run type checking
poetry run mypy .
```

### Adding New Dependencies

```bash
# Add a production dependency
poetry add package_name

# Add a development dependency
poetry add --group dev package_name
```

## API Documentation

Once the server is running, you can access:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## API Endpoints

### Users

- `POST /api/users/` - Create a new user
- `GET /api/users/` - Get all users
- `GET /api/users/{user_id}` - Get a specific user
- `PUT /api/users/{user_id}` - Update a user
- `DELETE /api/users/{user_id}` - Delete a user

### Events

- `POST /api/events/` - Create a new event
- `GET /api/events/` - Get all events
- `GET /api/events/{event_id}` - Get a specific event
- `PUT /api/events/{event_id}` - Update an event
- `DELETE /api/events/{event_id}` - Delete an event

## Development Notes

This is a basic setup with in-memory storage. For production use, you should:

1. Implement a proper database (PostgreSQL recommended)
2. Add authentication and authorization
3. Add input validation
4. Implement proper error handling
5. Add logging
6. Add tests
