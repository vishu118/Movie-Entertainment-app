import React from 'react'

const useGenre = (selectedGenre) => {
 if(selectedGenre.length < 1) return "";

 const GenereIds = selectedGenre.map((ele) => ele.id )
 return GenereIds.reduce((acc,curr) => acc + "," + curr)
}

export default useGenre
