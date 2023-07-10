import { Pagination} from '@mui/material'
import React from 'react'




const CustomPagination = ({setPage , TotalPages = 10}) => {
     const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0,0)
     }
  return (
    <div>
    

        <Pagination 
        count = {TotalPages} 
        onChange = {(e)=> handlePageChange(e.target.textContent)}
        color='primary'
        size='large'
        hideNextButton
        hidePrevButton
        style ={{
        display:"flex",
        alignItem:"center",
        justifyContent:"center",
        marginTop:20
        
       }} />

   
    </div>
  )
}

export default CustomPagination