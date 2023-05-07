import api from "../services/api";

class VuelosRepository {
  async getVuelos() {
    const response = await api.get(`varelaserver/vuelos`);
    return response.data;
  }
  async postVuelos(vuelo) {
    const response = await api.post(`varelaserver/vuelos`, vuelo);
    return response.data;
  }
  async deleteVuelo(id) {
    const response = await api.delete(`varelaserver/vuelos/${id}`, id);
    return response.data;
  }
  async getVueloById(id) {
    const response = await api.get(`varelaserver/vuelos/${id}`, id);
    return response.data;
  }
}

export default new VuelosRepository();
