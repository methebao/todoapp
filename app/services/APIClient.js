import axios from "axios";

class APIClient {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
  }
  createResource(resource) {
    this.endpoints[resource.name] = this.createCRUDEndpoints(resource);
  }
  createCRUDEndpoints({ name }) {
    let endpoints = {};
    const resourceURL = `${this.url}/${name}`;
    endpoints.getAll = () => axios.get(resourceURL);
    endpoints.getOne = ({ id }) => axios.get(`${resourceURL}/${id}`);
    endpoints.create = objectToCreate =>
      axios.post(resourceURL, objectToCreate);
    endpoints.update = objectToUpdate =>
      axios.put(`${resourceURL}/${objectToUpdate.id}`, objectToUpdate);
    endpoints.delete = ({ id }) => axios.delete(`${resourceURL}/${id}`);
    return endpoints;
  }
}
export default APIClient;
