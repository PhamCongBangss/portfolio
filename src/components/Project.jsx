/* eslint-disable react/prop-types */

function Project({ project }) {
  const { use, projectName, description, projectImg, code, web } = project;
  const { html, css, javascript, reactRouter, redux, react } = use;
  return (
    <div className="bg-[#474B4F] max-w-md mx-auto rounded-xl shadow-md overflow-hidden hover:animate-pulse w-full md:max-w-2xl">
      <div className="md:flex md:justify-between md:items-center">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-[#86C232] font-semibold mb-2">
            {projectName}
          </div>

          <div>
            {html ? (
              <span className="bg-orange-500 px-2 py-1 rounded-lg text-white mr-4">
                HTML
              </span>
            ) : (
              ""
            )}

            {css ? (
              <span className="bg-blue-600 px-2 py-1 rounded-lg text-white mr-4">
                CSS
              </span>
            ) : (
              ""
            )}

            {javascript ? (
              <span className="bg-yellow-500 px-2 py-1 rounded-lg text-white mr-4">
                JAVASCRIPT
              </span>
            ) : (
              ""
            )}

            {react ? (
              <span className="bg-blue-400 px-2 py-1 rounded-lg text-white mr-4">
                REACT
              </span>
            ) : (
              ""
            )}

            {reactRouter ? (
              <span className="bg-red-400 px-2 py-1 rounded-lg text-white mr-4">
                REACT ROUTER
              </span>
            ) : (
              ""
            )}

            {redux ? (
              <span className="bg-purple-500 px-2 py-1 rounded-lg text-white mr-4">
                REDUX
              </span>
            ) : (
              ""
            )}
          </div>

          <p className="mt-2 text-[#6B6E70] mb-4">{description}</p>

          <div className="md:flex space-y-8 md:space-y-0">
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={code}
                className="cursor-pointer text-lg px-4 py-2 rounded-lg mr-6 bg-[#86C232] text-white "
              >
                Code
              </a>
            </div>

            <div>
              <a
                href={web}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-lg px-5 py-2 rounded-lg bg-white text-[#86C232]"
              >
                Web
              </a>
            </div>
          </div>
        </div>

        <div className="p-5 shrink-0 ">
          <img
            src={projectImg}
            width={100}
            height={100}
            className="justify-between items-center rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
