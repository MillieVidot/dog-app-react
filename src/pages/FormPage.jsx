export default function FormPage({ addDog }) {
  function handleSubmit(event) {
    event.preventDefault()
    const dogData = {
      name: event.target.name.value,
      bio: event.target.bio.value,
      image: event.target.image.value,
      isGoodDog: true,
    }
    addDog(dogData)
    event.target.reset()
    console.log("dogData:", dogData)
  }

  return (
    <section className="main__dog-section">
      <h2>Add a new Dog</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Dog's name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="image">Dog's picture</label>
        <input type="url" id="image" name="image" />

        <label htmlFor="bio">Dog's bio</label>
        <textarea rows="5" id="bio" name="bio"></textarea>

        <button className="form__button">Let's Add a dog</button>
      </form>
    </section>
  )
}
