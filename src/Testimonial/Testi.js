import React from 'react';

const Testimonials = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 rounded-3xl mx-4 md:mx-8 lg:mx-16 xl:mx-24 mt-8 cardscolor neuromorphism">
      <div className="p-8">
    
        <div className="textstyle fontcolor text-white text-center py-4 text-4xl md:text-5xl lg:text-6xl font-bold">
          Flavour Fusion Since 2020
        </div>

        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between gap-4 mt-8">
          <div className="cardscolor neuromorphism text-white p-4 rounded-xl w-full md:w-1/3 text-center">
            <h2 className="text-2xl md:text-3xl text-left font-bold textstyle fontcolor">Our History</h2>
            <p className="mt-2 text-black text-left textstyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus nesciunt, dolore animi porro enim vel autem voluptatum veniam expedita! Quo quis repellat itaque, fugit sint illo saepe dolores sed.</p>
          </div>

          <div className="cardscolor text-white p-4 rounded-xl w-full md:w-1/3 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-left textstyle fontcolor">Our Vision</h2>
            <p className="mt-2 text-black text-left textstyle">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aspernatur, laborum placeat sapiente quos consequuntur deserunt, aliquid deleniti magnam, nam doloremque sed officia velit numquam ratione! Ullam, nisi. Eligendi, minima.</p>
          </div>

          <div className="cardscolor text-white p-4 rounded-xl w-full md:w-1/3 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-left textstyle fontcolor">Our Mission</h2>
            <p className="mt-2 text-black text-left textstyle">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aspernatur, laborum placeat sapiente quos consequuntur deserunt, aliquid deleniti magnam, nam doloremque sed officia velit numquam ratione! Ullam, nisi. Eligendi, minima.</p>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="fontcolor textstyle text-center py-4 mt-8 text-4xl md:text-5xl lg:text-6xl font-bold">
          Team Members
        </div>

        {/* Member Details */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
          <div className="cardscolor text-black p-4 rounded-xl w-full md:w-1/3 text-center">
            <div className="mb-4">
              <img src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Member 1" className="mx-auto rounded-full w-24 h-24" />
            </div>
            <h2 className="text-2xl md:text-3xl text-left font-bold fontcolor textstyle">Member Name</h2>
            <p className="mt-2 text-left textstyle">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi harum sed, beatae libero reiciendis iusto doloribus natus aut esse perspiciatis. Reiciendis corporis non animi sequi iusto veniam quod dolores consectetur?</p>
          </div>

          <div className="cardscolor text-black p-4 rounded-xl w-full md:w-1/3 text-center">
            <div className="mb-4">
              <img src="https://images.unsplash.com/photo-1558203728-00f45181dd84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Member 2" className="mx-auto rounded-full w-24 h-24" />
            </div>
            <h2 className="text-2xl md:text-3xl text-left font-bold fontcolor textstyle">Member Name</h2>
            <p className="mt-2 text-left textstyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias facilis esse dolores saepe rem libero error quam, consequuntur quo odio perspiciatis, laudantium, alias maiores ab iste temporibus natus minus?</p>
          </div>

          <div className="cardscolor text-black p-4 rounded-xl w-full md:w-1/3 text-center">
            <div className="mb-4">
              <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Member 3" className="mx-auto rounded-full w-24 h-24" />
            </div>
            <h2 className="text-2xl md:text-3xl text-left font-bold fontcolor textstyle">Member Name</h2>
            <p className="mt-2 text-left textstyle">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nisi non amet expedita, a maxime obcaecati omnis deleniti, aut dolor voluptates maiores itaque aspernatur culpa illum inventore consequatur quod ex.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
