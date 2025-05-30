# MiPlantika

## [¡Visita nuestra página aqui!](mi-plantika.netlify.app)

![App Logo](./public/miplantika.png)

## Description

### Este proyecto es sobre las plantas y sus familias, se puede consultar las características tanto de la familia como de la planta en específica, y puedes subir tu propia planta.

#### [Client Repo here](https://github.com/Albaperez26/MiPlantika-client)

#### [Server Repo here](https://github.com/Albaperez26/MiPlantika-server)

## Technologies, Libraries & APIs used

#### HTML, CSS, Javascript, React, axios.

## Backlog Functionalities

### Podría tener la funcionalidad de acceder a una newsletter, y acceder a un foro donde los usuarios puedan comentar cosas acerca de sus plantas y ayudarse mutuamente.

# Client Structure

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about.
- **family and plants list** - As a user I want to see all the families and plants.
- **plants create** - As a user I want to create a plant so that I can invite others to attend.
- **plants edit** - As a user I want to edit a plant so i can modify them.
- **plants delete** - As a user I want to delete a plant so i can delete them.

## Client Routes

### React Router Routes (React App)

| Path                               | Page           | Components | Behavior                                   |
| ---------------------------------- | -------------- | ---------- | ------------------------------------------ |
| `/`                                | Home           |            | Home page                                  |
| `/species/:speciesId`              | SpeciesDetails |            | Species Details and flowers of each specie |
| `/plants/:plantsId`                | PlantsDetails  |            | Plants details                             |
| `/species/:speciesId/create-plant` | CreatePlants   |            | Create your plant and add to his specie    |
| `/plants/:plantsId/edit`           | EditPlants     |            | Edit all plants in the page                |
| `/aboutUs`                         | AboutUs        |            | About the page team                        |
| `*`                                | ErrorPage      |            | Error page when route is not defined       |

## Other Components

- Navbar
- Footer

## Links

### Collaborators

[Alba Pérez](https://github.com/Albaperez26)

### Project

#### [Client Repo here](https://github.com/Albaperez26/MiPlantika-client)

#### [Server Repo here](https://github.com/Albaperez26/MiPlantika-server)

[Deploy Link](mi-plantika.netlify.app)
