import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import AyahVerse from "./components/AyahVerse"
import RangeVerse from "./components/RangeVerse"
import AllChapter from "./components/AllChapter"
import WordInQuran from "./components/WordInQuran"

function App() {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '27839e9a69msh5e0423828ff7c74p1ff6e2jsn1b13042961f3',
	// 	  'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
  //   }
  // }

  // // ayah/verse  chapter 114, ayah 2
  // const getAyahVerse = async () => {
  //   const res = await fetch('https://al-quran1.p.rapidapi.com/114/2',options )
  //   const result = await res.json()
  //   const id = result.id;
  //   const content = result.content;
  //   const eng = result.translation_eng;
  //   const trans= result.transliteration;
  //   console.log(id)
  //   console.log(content)
  //   console.log(eng)
  //   console.log(trans)
  // }


  // // all chapter 1 to 114
  // const getAllChapter = async () => {
  //   const res = await fetch('https://al-quran1.p.rapidapi.com/114',options )
  //   const result = await res.json()
  //   console.log(result)
  // }

  // const getWord = async () => {
  //   const res = await fetch('https://al-quran1.p.rapidapi.com/corpus/muhammad',options )
  //   const result = await res.json()
  //   console.log(result)
  // }

  // // range of verses eg chapter 114, range 1-3
  // const getRangeVerse = async () => {
  //   const res = await fetch('https://al-quran1.p.rapidapi.com/114/1-3',options )
  //   const result = await res.json()
  //   console.log(result)
  // }
  // useEffect( () => {
  //   getAyahVerse();
  //   getAllChapter();
  //   getWord();
  //   getRangeVerse();
  // },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ayah-verse" element={<AyahVerse/>}/>
        <Route path="/range-verse" element={<RangeVerse/>}/>
        <Route path="/all-chapter" element={<AllChapter/>}/>
        <Route path="/word-in-quran" element={<WordInQuran/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
