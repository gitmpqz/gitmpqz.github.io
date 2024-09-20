import './MapQuiz.css';
// import { useState } from "react";
import { GeoObject} from "./MapQuizTypes";
import { WriteAllYouCan } from "./Quizzes";
// import DropDown from "../utils/dropdown";

import japan_prefectures_data from "./data/japan_prefectures.json";

function App() {
  const japanPrefectures: GeoObject[] = (japan_prefectures_data as GeoJSON.FeatureCollection).features.map((feature: GeoJSON.Feature) => {
    return {
      name: feature.properties?.nam || "",
      accept: feature.properties?.accept || [],
      shape: feature,
    }
  });

  return (
    <>
      <div className="MapQuizApp">
        <h1>Map Quizzes</h1>
        <WriteAllYouCan objects={japanPrefectures} />
      </div>
    </>
  )
}

export default App;
