class Api {
  constructor() {
    this.URL = "https://api-test-dragon.herokuapp.com/objects/0"
  }

  async patch(bossDamage) {
    this.number -= bossDamage
    this._patchData()
  }

  async get() {
    const data = await this._getData();
    this.number = data.number
    $("#content").text(data.number)
  }

  async _getData() {
    const response = await fetch(this.URL)
    return response.json()
  }

  async _patchData() {
    fetch(this.URL, {
      method: 'PATCH',
      body: JSON.stringify({
        "id": 0,
        "title": "First post!",
        "content": "Second post!",
        "number": this.number
      }),
      headers: {
        "Content-type": "application/json",
      }
    })
  }
}
