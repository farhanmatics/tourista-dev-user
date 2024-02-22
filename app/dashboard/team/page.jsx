"use client";

const page = () => {
  return (
    <div className="mx-auto">
      <section>
        <div className="bg-[#1A202C] p-8">
          <div className="flex flex-wrap items-center justify-between -mx-2">
            <div className="w-full md:w-auto px-2 mb-6 md:mb-0">
              <h4 className="text-2xl font-bold text-white tracking-wide leading-3">
                Overview
              </h4>
            </div>
            <div className="w-full md:w-auto px-2">
              <div className="sm:flex items-center">
                <div className="w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4"></div>
                <div className="w-full sm:w-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 h-screen">
        <div className="container px-4 mx-auto">
          <div className="p-6 bg-[#232B3A] rounded-xl">
            <div className="flex flex-wrap mb-4 items-center justify-between -m-2">
              <div className="w-auto p-2">
                <h4 className="text-xl font-semibold text-white">
                  Team members
                </h4>
                <p className="text-xs font-medium text-[#919EB0] mb-4">
                  Your subtitle text about team members goes here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
