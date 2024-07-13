import * as React from 'react'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Pagination from "./components/Pagination/Pagination";
import InputBlok from "./components/input-blok/InputBlok";
import Input from "./components/input-blok/Input";
import { useGetPhotoByNameQuery } from './services/pokemon'
import './index.css'

function App() {
  const { data, error, isLoading } = useGetPhotoByNameQuery('imgUrl')
  if (error) { return <>Error</> }
  if (isLoading) { return <>Loading...</> }

  else return (data)(
    <div className="App">
      <Header />
      <InputBlok onInputChange={onInputChange} />
      <Main setPhoto={currentPhoto} loading={isLoading} />
      <Pagination
        photoPerPage={photoPerPage}
        totalPhotos={photo.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  )
}

export default App
