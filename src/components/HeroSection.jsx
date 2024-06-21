import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="flex mt-7">
        <div className="w-1/2 text-left py-40">
            <h1 className="text-7xl font-bold ">
              Tell a <span className="text-green-500">better</span>
              <br />
              <span className="text-green-500">brand</span> story
            </h1>

          <p className="text-left py-10 font-semibold items-end">
            Literature surrounded insensible at indulgence or to admiration
            remarkably. Matter future lovers desire marked boy use. Chamber
            reached do he nothing be.
          </p>
          <div className="flex ">

          <button className="bg-green-500  h-9 w-40">Explore More</button>
          <button className="px-6 text-green-500">Contact Us</button>
          </div>
        </div>

        {/* hero image section */}
        <div className=" w-1/2 py-40 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/3c27/927f/67daea87fb959731a55b792b163e8d7a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdKvNr-P-CxE2~teeo~O66Q-kB1qF3Vzsznw7VtEsE6WqX0T~gw1pZH0Ns7Sl6IMR9uyCr~lK4-e668JgUiFFCSnvea0h4nHMc5PwQbAr3~SNzY~GxvwxlIs2jmKr7yq2Sn1sl21sYnx7ub9h6zI4xKDPsEo-qKvRSrdwB38s1LWU450nOx6lrBlUrE9QWh0v7GxLmRO7OETXdvy6xJSiVUq4U~yLhYg0BuAxFOS4KQ~uYCZ5ngtC8OBS~XB86V~yMvk1Lxf7A6cG8ANsLrhBwohWs5E47uvdtV0dZScB0ji4xLOuJPu8XurqmWDOkvJJqP6D5elhnPkrA9~kYqfkw__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
