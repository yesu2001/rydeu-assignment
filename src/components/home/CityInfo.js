import React from "react";
import cityPic1 from "../../assets/homepage/cityPic1.png";
import cityPic2 from "../../assets/homepage/cityPic2.png";

export default function CityInfo() {
  return (
    <div className="text-[#484848] p-6 lg:p-16 space-y-12">
      <div className="flex gap-6">
        <p className="text-slate-400">Home</p>
        <p className="text-slate-400">Cities</p>
        <p>Rome</p>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* Left side */}
        <div className="flex items-center lg:items-start lg:flex-col flex-[0.3] space-x-2 lg:space-y-8 mb-4 lg:mb-0">
          <div className="border bg-[#073A4D] rounded-full px-3 py-1  lg:border-none lg:bg-transparent flex items-center gap-3">
            <div className="hidden lg:flex w-3 h-3 border border-[#FF8924] rounded-full" />
            <p className="text-white lg:text-[#FF8924] text-xs lg:text-2xl font-semibold">
              At a Glance
            </p>
          </div>
          <div className="border border-[#898989] rounded-full px-2 py-1 lg:border-none flex items-center gap-3">
            <div className="hidden lg:flex w-2 h-2 bg-[#C8C8C8] rounded-full" />
            <p className="text-[#898989] text-xs">Transportation</p>
          </div>
          <div className="border border-[#898989] rounded-full px-2 py-1 lg:border-none flex items-center gap-3">
            <div className="hidden lg:flex w-2 h-2 bg-[#C8C8C8] rounded-full" />
            <p className="text-[#898989] text-xs">Airport Transfers</p>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <div className="hidden lg:flex w-2 h-2 bg-[#C8C8C8] rounded-full" />
            <p className="text-[#898989]">Sightseeing Transportation</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 text-[18px] space-y-6 lg:pr-8">
          <p>
            Nestled in the heart of Italian Peninsula, Rome is the capital of
            the country and one of the most populated cities in Italy. From its
            rich architecture to rare artefacts, this city is known to possess a
            history like none other. The picturesque atmosphere, the cold wind
            blowing and the serene atmosphere is what makes Rome a must visit
            place for all the travel fanatics out there.
          </p>
          <div className="flex flex-col lg:flex-row items-start">
            <div className="flex-[0.5] space-y-4">
              <p>
                A perfect blend of gothic ruins, jaw dropping art and lively
                nights, Rome sets an exemplary example for a place about how it
                should entertain its travellers. The city wholeheartedly
                welcomes travellers from a wide array of interests, from awe
                inspiring monuments to living life at its best, Rome will never
                fail to surprise you with a new place to explore.
              </p>
              <p>
                A perfect blend of gothic ruins, jaw dropping art and lively
                nights, Rome sets an exemplary example for a place about how it
                should entertain its travellers. The city wholeheartedly
                welcomes travellers from a wide array of interests, from awe A
                perfect blend of gothic ruins, jaw dropping art and lively
                nights, Rome sets an exemplary example for a place about how it
                should entertain its travellers. The city wholeheartedly
                welcomes travellers from a wide array of interests, from awe
              </p>
            </div>
            <div className="flex-[0.5] p-2 lg:p-8 space-y-2">
              <img src={cityPic1} alt="citypic1" />
              <p className="text-sm tetx-[#737373]">
                Rome Civitavecchia |{" "}
                <span className="text-xs">Image by Alejandro Picasso</span>
              </p>
            </div>
          </div>
          <p>
            The Roman Empire has been an icon when it comes to historical
            importance. The Roman Empire had cut the ribbons when Augustus
            Caesar announced to be the first emperor of Rome in 31BC and ended
            with the fall of Constantinople in 1453CE. Known to be the centre of
            the Roman Empire, Rome attracts the majority of the crowd due to its
            rich history and politics.
          </p>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="flex-[0.45]">
              <img src={cityPic2} alt="cityPic2" className="w-full h-72" />
            </div>
            <div className="flex-[0.5]">
              <p>
                Referred to as ‘An Eternal City’ in the beginning of the
                history, Rome is seen to be a dream for music lovers due to the
                Parco Della Musica which is known to be one of the largest music
                venues in the world. Not only music, Rome has also set itself in
                the most wanted places to visit in the world and is the third
                most visited places in the entire Europe. This place has
                experienced arts from different periods and became a home for
                some of the most renowned artists such as Borromini, Bernini,
                Carracci and Cortona.
              </p>
            </div>
          </div>
          <p>
            Embracing the ancient art, Rome has now decided to use its
            innovation to give birth to contemporary art to keep enhancing their
            love for art and architecture, National Museum of the 21st Century
            Arts is a live example of that. The Italian cuisine has somehow
            managed to be a king of all cuisines, from the Carciofi alla romana
            to the Spaghetti alla carbonara- Delicious spaghetti topped with
            bacon, smokey eggs and pecorino is what makes it mouth watering.
          </p>
          <p>
            Rome has a series of reasons to attract you and slip you into its
            warm arms to rejuvenate your soul with its authentic art,
            awe-inspiring architecture and mouth-watering food.
          </p>
          <hr className="w-40" />
        </div>
      </div>
    </div>
  );
}
