import DecreaseButton from "./components/DecreaseButton"
import { useState } from "react"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"
// import data from "./data"
// import DeleteButton from "./components/DeleteButton"



const App = () => {
  const [value, setValue] = useState(0)

  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  const increaseOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  const resetToZero = () => {
    setValue(0)
  }
  
  return (
      <div className="counter">
        <h1>Counter</h1>
        <h2>{value}</h2>
        <DecreaseButton decrease={decreaseOne}/>
        <IncreaseButton increase={increaseOne}/>
        <ResetButton reset={resetToZero} />
      </div>
  )

    // const [movieList, setMovieList] = useState(data)

    // const deleteOneMovie = (idNum) => {
    //   const filteredMovies = movieList.filter( (oneMovie) => {
    //     return oneMovie.id !== idNum
    //   })
    //   setMovieList(filteredMovies)
    // }

    // const deleteAllMovies = () => {
    //   setMovieList([])
    // }

    // const reloadAllMovies = () => {
    //   setMovieList(data)
    // }

    // return ( 
      // <section>
      // <div className="all-movies">
      //   {
      //     data.map( (oneMovie) => {
      //         const {id, title, age, tags, description} = oneMovie
      //         // const {id, image, title, age, tags, description} = oneMovie

      //         return <div className="one-movie" key={id}>
      //             {/* <img src={image} alt ="" /> */}
      //             <h2>{title}</h2>
      //             <p>{age}</p>
      //             <p>{tags}</p>
      //             <p>{description}</p>
      //             <DeleteButton deleteMovie={ () => deleteOneMovie(id)}/>
      //         </div>
      //     })
      //   }   
      // </div>

      {/* <div className="button-box">
         <AllDeleteButton deleteMovies={deleteAllMovies}/>    
         <ReloadMovieButton reloadMovies={reloadAllMovies}/>
      </div> */}
    // </section>
    // )
}

export default App