# Mini Social Media Project

This project is a simple social media platform with basic features such as creating social media profiles, making posts, and interacting with posts through likes and shares. The project is built using Django for the backend and React for the frontend.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Backend](#backend)
  - [Models](#models)
  - [Serializers](#serializers)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [React Components](#react-components)
- [Usage](#usage)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

- Python (version >= 3.6)
- Django
- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mini-social-media.git


2. Navigate to the backend directory and install dependencies:

   ```bash
   cd backend
   pip install -r requirements.txt


3. Apply database migrations:

   ```bash
    python manage.py migrate


4. Start the Django development server:

   ```bash
   python manage.py runserver


5. Navigate to the frontend directory and install dependencies:

   ```bash
    cd frontend
    npm install


6. Start the React development server:

   ```bash
   npm start

Now, you should be able to access the application at http://localhost:3000.
## Backend

### Models

- **SocialMedia:** Represents a social media profile with attributes like name, URL, and about information.
- **Post:** Represents a post made within a social media profile. Includes title, description, likes, shares, etc.
- **Like:** Represents a like interaction on a post.
- **Share:** Represents a share interaction on a post.
- **Comment:** Represents a comment made on a post.

### Serializers

- **SocialMediaSerializer:** Serializes the `SocialMedia` model.
- **PostSerializer:** Serializes the `Post` model along with related comments.
- **LikeSerializer:** Serializes the `Like` model.
- **ShareSerializer:** Serializes the `Share` model.
- **CommentSerializer:** Serializes the `Comment` model.

### API Endpoints

- `/api/socialMedia/`: CRUD operations for social media profiles.
- `/api/posts/`: CRUD operations for posts.
- `/api/likes/`: CRUD operations for likes.
- `/api/shares/`: CRUD operations for shares.
- `/api/comments/`: CRUD operations for comments.

## Frontend

### React Components

- **App:** Main component rendering the entire application.
- **Navbar:** Navigation bar component.
- **Body:** Main content area component displaying posts.
- **Post:** Component for rendering individual posts.
- **Footer:** Footer component.

## Usage

- Create a social media profile.
- Make posts within a profile.
- Like and share posts.
- Add comments to posts.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to create a pull request or open an issue.
