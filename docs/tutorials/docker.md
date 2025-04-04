# Docker Guide

## Introduction
Docker is a platform for developing, shipping, and running applications in containers. Containers allow developers to package applications with all their dependencies and run them consistently across different environments.

## Installation
- **Windows**: Download and install Docker Desktop from [Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- **Mac**: Download and install Docker Desktop from [Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- **Linux**: Follow distribution-specific instructions from [Docker Docs](https://docs.docker.com/engine/install/)

## Common Commands

### Basic Commands
- `docker run <image>`: Run a container
- `docker build <image>`: Build an image
- `docker push <image>`: Push an image
- `docker pull <image>`: Download an image from a registry
- `docker ps`: List running containers
- `docker ps -a`: List all containers (including stopped)
- `docker images`: List all local images
- `docker stop <container>`: Stop a running container
- `docker rm <container>`: Remove a container
- `docker rmi <image>`: Remove an image

### Working with Containers
- `docker run -d <image>`: Run container in detached mode
- `docker run -p <host-port>:<container-port> <image>`: Port mapping
- `docker run -v <host-path>:<container-path> <image>`: Volume mounting
- `docker exec -it <container> /bin/bash`: Access container shell

## Dockerfile Basics
A Dockerfile is used to build custom Docker images. Here's a simple example:

