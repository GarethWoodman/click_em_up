class Api {
  static async get() {
    this.URL = "https://api-test-dragon.herokuapp.com/objects/0"
    const response = await fetch(this.URL)
    this.data = await response.json()
    this._assignAttributes()
  }

  static async _assignAttributes() {
    this.bossCurrentHealth = this.data.number
  }

  static async updateBossHealth(damage) {
    fetch(this.URL, {
      method: 'PATCH',
      body: JSON.stringify({
        "id": 0,
        "title": "First post!",
        "content": "Second post!",
        "number": this.bossCurrentHealth -= damage
      }),
      headers: {
        "Content-type": "application/json",
      }
    })
  }
}
