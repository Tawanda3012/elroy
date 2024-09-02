import React from 'react';

const EnrollmentPage = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto font-sans">
      <h1 className="mb-6 text-3xl font-bold text-blue-800">Enrolment Procedures</h1>
      
      <p className="mb-4 text-gray-700">
        Elroy Foundation Primary School is delighted that you are considering sending your child to our school. Please see below for the admissions process and do email our Enrolment Secretary if you have any questions, or please call us on +263 772 148 691 or +263 772 148 692 and ask for the Enrolment Secretary.
      </p>
      
      <table className="w-full mb-6 border border-collapse border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-2 text-left border border-gray-300">2024</th>
            <th className="p-2 text-left border border-gray-300">Levy</th>
            <th className="p-2 text-left border border-gray-300">Term Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-gray-300">ECD</td>
            <td className="p-2 border border-gray-300">0</td>
            <td className="p-2 border border-gray-300">$45</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300">Grade 1 - & 7</td>
            <td className="p-2 border border-gray-300">$0</td>
            <td className="p-2 border border-gray-300">$45</td>
          </tr>
        </tbody>
      </table>
      
      <p className="mb-4 text-sm italic text-gray-600">This includes a PAC levy of $50 per term. Additional to the fees above. Desk fees are non refundable.</p>
      
      <p className="mb-4 text-gray-700">
        To register for the above intake your child must be born between <strong className="text-blue-800">1st January – 31st December 2020 (or Nov/Dec 2019)</strong>. Please submit your application to
      </p>
      
      <p className="mb-4 text-gray-700">
        You need to enclose a certified copy of the child's birth certificate and a colour passport-sized photo with your application letter (being sure to include your physical address) <strong className="font-bold">plus</strong> <em>the completed questionnaire (see below) & ITE form. Please note that we receive approximately 200 applications each year and have limited seats to offer to the public</em> <strong className="font-bold">so applicants should apply to every possible school to avoid disappointment</strong>. <strong className="text-blue-800">Friday 7th February 2025</strong>
      </p>
      
      <p className="mb-6 text-gray-700">
        Elroy Foundation Primary School admits students of any race, colour, national or ethnic origin and grants them all the rights privileges, programs, and activities generally accorded or made available to students at the school. The school does not discriminate on the basis of race, colour, national, or the ethnic origin in administration of its education, admission policies, tuition assistance, athletic and other school administered programmes.
      </p>
      
      <div className="mb-4 text-gray-700">
        <strong className="text-blue-800">Physical Address:</strong> Takawira, Harare, Zimbabwe
      </div>
      
      <div className="mb-4 text-gray-700">
        <strong className="text-blue-800">Map:</strong> our GWP Coordinates are: <strong className="text-blue-800">17°46'4"S 31°1'41"E</strong>
      </div>
      
      <div className="mb-4 text-gray-700">
        <strong className="text-blue-800">Tel:</strong> 0772 148 691 or 0772 148 692
      </div>
      
      <div className="mb-4 text-gray-700">
        <strong className="text-blue-800">For general queries</strong> please e-mail: info@Elroy Foundationprimary.ac.zw
      </div>
      
      <div className="mb-4 text-gray-700">
        <strong className="text-blue-800">For enrolment</strong> please e-mail: 
      </div>
      <div className="flex items-start justify-center p-6 space-x-4">
      <div className="w-1/3 p-4 border">
        <a
          href="https://www.windviewprimaryschool.co.zw/wp-content/uploads/2019/02/application-form-2019.docx"
          download
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://www.windviewprimaryschool.co.zw/wp-content/uploads/2019/01/windviewprimaryschool.png"
              alt="Windview Primary School Logo"
              className="w-48 h-48"
            />
          </div>
          <h2 className="text-lg font-bold text-center">
            APPLICATION FORM
          </h2>
        </a>
      </div>

      <div className="w-1/3 p-4 border">
        <a
          href="https://www.windviewprimaryschool.co.zw/wp-content/uploads/2019/02/uniform-package-2019.docx"
          download
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://www.windviewprimaryschool.co.zw/wp-content/uploads/2019/01/windviewprimaryschool.png"
              alt="Windview Primary School Logo"
              className="w-48 h-48"
            />
          </div>
          <h2 className="text-lg font-bold text-center">
            UNIFORM PACKAGE
          </h2>
        </a>
      </div>

      <div className="w-1/3 p-4 border">
        <a
          href="https://www.windviewprimaryschool.co.zw/wp-content/uploads/2019/02/newsletter-1-of-2019final.docx"
          download
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://www.windviewprimaryschool.co.zw/wp-content/uploads/2019/01/windviewprimaryschool.png"
              alt="Windview Primary School Logo"
              className="w-48 h-48"
            />
          </div>
          <h2 className="text-lg font-bold text-center">
          Elroy Primary  Newsletter
          </h2>
        </a>
      </div>
    </div>
    </div>
  );
};

export default EnrollmentPage;