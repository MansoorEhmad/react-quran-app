import { useState } from "react";
import Header from "./Header";
import { get } from "../data/get";

export default function AyahVerse() {
    let [ayahVerse, setAyahVerses] = useState(null);

    async function api(endPoints) {
        const data = await get(endPoints);
        setAyahVerses(data);
    }

    let [formSubmit, setFormSubmit] = useState(false);
    let [inputs, setInputs] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const chapterId = inputs.chapter_number;
        const verseId = inputs.verse_number;
        setFormSubmit(true);
        setTimeout(function () {
            setFormSubmit(false);
        }, 1000);
        if (formSubmit === false) {
            api('/'+chapterId+'/'+verseId);
        }
    }

    const handleChange = (e) => {
        const chapter = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [chapter]: value}))
    }

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="Enter chapter number" name="chapter_number" required onChange={handleChange} />
                            <label htmlFor="floatingInput">Chapter Number</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Enter verse number" name="verse_number" required  onChange={handleChange}/>
                            <label htmlFor="floatingPassword">Verse Number</label>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto text-center mt-4">
                            <button className="btn btn-outline-primary btn-lg" type="submit">Confirm</button>
                        </div>
                    </form>


                    {formSubmit && (
                        <div className="text-center mt-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>)}

                    {ayahVerse == null ? "" : (<div className="col-12 col-md-12 text-center"><div className="card border-primary text-center mt-4" style={{ background: "#1d1d20", color: "#52c41a" }}>
                        <div className="card-header text-primary" style={{ backgroundColor: "#2a3038" }}>
                            Content
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">{ayahVerse.content}</h6>
                            <p className="card-text">{ayahVerse.translation_eng}</p>
                            <p className="card-text">{ayahVerse.transliteration}</p>
                        </div>
                    </div></div>)}
                </div>
            </div>
        </>
    )
}