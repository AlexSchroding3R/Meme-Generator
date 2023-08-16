import { useEffect, useState } from 'react';


function Meme() {
    const [meme, setmeme] = useState({
        toptext: "",
        bottomtext: "",
        randomimage: "https://i.imgflip.com/43a45p.png",
    });
    const [allimages, setallimages] = useState([]);


    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setallimages(data.data.memes));
    },)
    function getimage() {
        const randomnuber = Math.floor(Math.random() * allimages.length);
        const url = allimages[randomnuber].url;
        setmeme((prevImage) => ({
            ...prevImage,
            randomimage: url,
        }));
    }
    function handleClick(event) {
        const { name, value } = event.target;

        setmeme((prevText) => ({
            ...prevText,
            [name]: value,
        }));
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form-input"
                    placeholder="Top text"
                    type="text"
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleClick}
                />
                <input
                    className="form-input"
                    placeholder="Bottom text"
                    type="text"
                    name="bottomtext"
                    value={meme.bottomtext}
                    onChange={handleClick}
                />
                <button onClick={getimage} className="form-button">
                    Get a new meme Image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomimage} alt="" className="meme--image" />
                <h1 className="meme--text top"> {meme.toptext} </h1>
                <h1 className="meme--text bottom"> {meme.bottomtext}</h1>
            </div>
        </main>
    );
}

export default Meme;
