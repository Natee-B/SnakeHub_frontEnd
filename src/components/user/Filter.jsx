import React, { useEffect, useState } from "react";
import useCategoryStore from "../../store/categoryStore";

export default function Filter({
  selectedGender,
  setSelectedGender,
  selectedFeed,
  setSelectedFeed,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  setDisplayedSnakes,
}) {
  const getAllSnake = useCategoryStore((state) => state.getAllSnake); //เรียก Snake
  const CategoryAllSnake = useCategoryStore((state) => state.CategoryAllSnake); //ใช้ Snake
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getAllSnake();
  }, []);

  // useEffect(() => {
  //     let filteredSnakes = CategoryAllSnake.AllSnake;
  //     //เกือบได้เขียน 15 else if

  //     if(selectedPrice){
  //         filteredSnakes = filteredSnakes.filter(
  //             (el) => el.price <= selectedPrice
  //           );
  //     }
  //     if (selectedGender && selectedFeed) {
  //         filteredSnakes = filteredSnakes.filter(
  //           (el) => el.gender === selectedGender && el.feedingType === selectedFeed
  //         );
  //       } else if (selectedGender) {
  //       filteredSnakes = filteredSnakes.filter(
  //         (el) => el.gender === selectedGender
  //       );
  //     } else if (selectedFeed) {
  //       filteredSnakes = filteredSnakes.filter(
  //         (el) => el.feedingType === selectedFeed
  //       );
  //     }
  //     console.log('filteredSnakes', filteredSnakes)
  //     setDisplayedSnakes(filteredSnakes);
  // }, [selectedGender, selectedFeed,selectedPrice]);

  useEffect(() => {
    let filteredSnakes = CategoryAllSnake?.AllSnake;

    // กรองตามราคา
    if (minPrice || maxPrice) {
      filteredSnakes = filteredSnakes.filter((el) => {

        const price = parseFloat(el.price);

        if (minPrice && maxPrice) {
          return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
        } else if (minPrice) {
          return price >= parseFloat(minPrice);
        } else if (maxPrice) {
          return price <= parseFloat(maxPrice);
        }
        return true;
      });
    }

    // กรองตามเพศ
    if (selectedGender) {
      filteredSnakes = filteredSnakes.filter(
        (el) => el.gender === selectedGender
      );
    }
    // กรองตามประเภทอาหาร
    if (selectedFeed) {
      filteredSnakes = filteredSnakes.filter(
        (el) => el.feedingType === selectedFeed
      );
    }

    console.log("filteredSnakes", filteredSnakes);
    setDisplayedSnakes(filteredSnakes);
  }, [
    selectedGender,
    selectedFeed,
    minPrice,
    maxPrice,
    CategoryAllSnake?.AllSnake,
  ]);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleOptionGender = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleOptionFeed = (e) => {
    setSelectedFeed(e.target.value);
  };
  const onShowClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => onShowClick()}
          className="bg-stone-300 hover:bg-stone-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <span className="mr-2">🔍</span>
          Filter
        </button>
      </div>

      {showFilter && (
        <>
          <div className="mt-4"> Price : MIN-MAX </div>
          <div className="flex gap-1">
            <input
              className="border border-gray-300 rounded p-2 w-[100%]"
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder="Min Price"
            />
            <input
              className="border border-gray-300 rounded p-2 w-[100%]"
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder="Max Price"
            />
          </div>

          <div className="flex justify-around">
            <div className="mt-2">
              Gender
              <div className="flex items-center space-x-4">
                <div className="flex flex-col justify-between">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="selectedGender"
                      value="UNKNOWN"
                      checked={selectedGender === "UNKNOWN"}
                      onChange={handleOptionGender}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Unknown</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="selectedGender"
                      value="MALE"
                      checked={selectedGender === "MALE"}
                      onChange={handleOptionGender}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="selectedGender"
                      value="FEMALE"
                      checked={selectedGender === "FEMALE"}
                      onChange={handleOptionGender}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-2">
              FeedingType
              <label className="flex items-center">
                <input
                  type="radio"
                  name="selectedFeed"
                  value="LIVE"
                  checked={selectedFeed === "LIVE"}
                  onChange={handleOptionFeed}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Live</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="selectedFeed"
                  value="FROZEN"
                  checked={selectedFeed === "FROZEN"}
                  onChange={handleOptionFeed}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Frozen</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="selectedFeed"
                  value="THAWED"
                  checked={selectedFeed === "THAWED"}
                  onChange={handleOptionFeed}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Thawed</span>
              </label>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
