export default function DogCard({ dog }) {
  return (
    <section>
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <div className="main__dog-section__desc">
        <h3>Bio</h3>
        <p>{dog.bio} </p>
      </div>
      <div className="main__dog-section__btn">
        <p>
          <em>Is naughty?</em>
          {dog.isGoodDog ? "Yes" : "No!"}
        </p>
        <button>{dog.isGoodDog ? "Make Good" : "Make Bad"}</button>
      </div>
    </section>
  )
}
