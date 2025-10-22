import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { PiCheckFatFill } from "react-icons/pi";

function Depoimentos() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const placeId = "ChIJFXaHV2xXzpQR-THjG9hmp4A";
    const apiKey = "AIzaSyBHeN9lc7jvPvZ96t35jvrLbGlzrz_LU70";

    fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews.slice(0, 3)); 
        }
      })
      .catch((err) => console.error("Erro ao buscar avaliações:", err));
  }, []);

  return (
    <div>
      <h2 className="font-marcellus text-center pb-6 pt-10 text-3xl font-semibold text-[#D3AF37]">
        O QUE DIZEM NOSSOS PACIENTES
      </h2>
      <p className="font-manrope text-center text-gray-500 text-sm mb-10">
        Confira as mais de{" "}
        <span className="font-semibold">300 avaliações 5 estrelas </span> no{" "}
        <a
          href="https://www.doctoralia.com.br/thiago-garcia/nutrologo/sao-paulo#profile-reviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-red-400 hover:text-red-500">Doctoralia</span>
        </a>
      </p>

      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-1 rounded-2xl  p-6   border border-transparent"
          >
            <div className="flex flex-col items-center mb-3">
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                className="w-10 h-10 rounded-full object-cover mb-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                }}
              />
              <p className="text-sm font-semibold text-gray-700 text-center pt-4 font-marcellus">
                {review.author_name}
              </p>
              <p className="text-[9px] text-green-500 text-center pt-2 font-manrope flex items-center gap-1">
                CONSULTA VERIFICADA{" "}
                <PiCheckFatFill className="text-green-500" size={10} />
              </p>
            </div>
            <p className="text-amber-500 text-lg mb-2 flex items-center justify-center">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} size={15} />
              ))}
            </p>
            <p className="text-gray-500 text-xs italic font-manrope pt-2 text-center">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="justify-center pt-12 flex items-center gap-2 text-gray-500 text-sm font-manrope pb-10 hover:text-gray-700 transition-transform duration-300 hover:scale-110">
        <a
          href="https://www.google.com/maps/place/Blue+Zone+Clinic/@-23.5675052,-46.6576791,17z/data=!4m7!3m6!1s0x94ce576c57877615:0x80a766d81be331f9!8m2!3d-23.5675101!4d-46.6551042!9m1!1b1
    "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="flex items-center gap-2">
            Veja mais depoimentos aqui <BsBoxArrowUpRight />
          </p>
        </a>
      </div>
    </div>
  );
}

export default Depoimentos;
