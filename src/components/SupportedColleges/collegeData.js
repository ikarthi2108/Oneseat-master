const collegeData = {
  Engineering: {
    Coimbatore: [
      {
        name: 'PSG College of Technology',
        fees: '₹75,000 - ₹100,000',
        managementFees: '₹1,50,000',
        govtQuotaFees: '₹75,000',
        image: require('../../assets/psg.jpg'), // Adjust the path
        description: 'One of the top engineering colleges in Coimbatore, known for excellent placements and industry connections.',
        admissionsDone: '20+ admissions done',
        coursesAvailable: ['Mechanical Engineering', 'Computer Science', 'Electrical Engineering'],
        facilities: [
          {
            name: 'Library',
            image: 'https://example.com/library.jpg',
          },
          {
            name: 'Laboratories',
            image: 'https://example.com/laboratories.jpg',
          },
          {
            name: 'Hostel',
            image: 'https://example.com/hostel.jpg',
          },
          {
            name: 'Sports Complex',
            image: 'https://example.com/sports-complex.jpg',
          },
        ],
        certifications: [
          {
            name: 'NAAC A++',
            image: 'https://example.com/naac-a++.jpg',
          },
          {
            name: 'ISO 9001:2015',
            image: 'https://example.com/iso-9001.jpg',
          },
        ],
        placementCompanies: [
          {
            name: 'TCS',
            image: 'https://example.com/tcs.jpg',
          },
          {
            name: 'Wipro',
            image: 'https://example.com/wipro.jpg',
          },
          {
            name: 'Cognizant',
            image: 'https://example.com/cognizant.jpg',
          },
          {
            name: 'Infosys',
            image: 'https://example.com/infosys.jpg',
          },
        ],
      },
      {
        name: 'Coimbatore Institute of Technology',
        fees: '₹50,000 - ₹80,000',
        managementFees: '₹1,00,000',
        govtQuotaFees: '₹50,000',
        image: require('../../assets/cit.jpeg'),
        description: 'An autonomous college with great academic facilities and industrial exposure.',
        admissionsDone: '15+ admissions done',
        coursesAvailable: ['Civil Engineering', 'Electronics and Communication', 'Information Technology'],
        facilities: [
          {
            name: 'Digital Library',
            image: 'https://example.com/digital-library.jpg',
          },
          {
            name: 'Hostel',
            image: 'https://example.com/hostel.jpg',
          },
          {
            name: 'Sports Ground',
            image: 'https://example.com/sports-ground.jpg',
          },
        ],
        certifications: [
          {
            name: 'NBA Accredited',
            image: 'https://example.com/nba-accredited.jpg',
          },
          {
            name: 'ISO 9001:2015',
            image: 'https://example.com/iso-9001.jpg',
          },
        ],
        placementCompanies: [
          {
            name: 'L&T',
            image: 'https://example.com/lt.jpg',
          },
          {
            name: 'HCL',
            image: 'https://example.com/hcl.jpg',
          },
          {
            name: 'IBM',
            image: 'https://example.com/ibm.jpg',
          },
          {
            name: 'Accenture',
            image: 'https://example.com/accenture.jpg',
          },
        ],
      },
    ],
    Chennai: [
      {
        name: 'IIT Madras',
        fees: '₹30,000 - ₹60,000',
        managementFees: '₹1,00,000',
        govtQuotaFees: '₹30,000',
        image: require('../../assets/iit madras.jpeg'),
        description: 'A premier institute for engineering and research in India.',
        admissionsDone: '50+ admissions done',
        coursesAvailable: ['Aerospace Engineering', 'Biotechnology', 'Electrical Engineering'],
        facilities: [
          {
            name: 'World-class Labs',
            image: 'https://example.com/world-class-labs.jpg',
          },
          {
            name: 'Library',
            image: 'https://example.com/library.jpg',
          },
          {
            name: 'Sports Facilities',
            image: 'https://example.com/sports-facilities.jpg',
          },
        ],
        certifications: [
          {
            name: 'NIRF Rank 1',
            image: 'https://example.com/nirf-rank-1.jpg',
          },
          {
            name: 'NAAC A++',
            image: 'https://example.com/naac-a++.jpg',
          },
        ],
        placementCompanies: [
          {
            name: 'Google',
            image: 'https://example.com/google.jpg',
          },
          {
            name: 'Microsoft',
            image: 'https://example.com/microsoft.jpg',
          },
          {
            name: 'Amazon',
            image: 'https://example.com/amazon.jpg',
          },
          {
            name: 'Intel',
            image: 'https://example.com/intel.jpg',
          },
        ],
      },
      {
        name: 'Anna University',
        fees: '₹25,000 - ₹75,000',
        managementFees: '₹1,20,000',
        govtQuotaFees: '₹25,000',
        image: require('../../assets/annauniversity.jpg'),
        description: 'Well-known for high academic standards and research programs.',
        admissionsDone: '30+ admissions done',
        coursesAvailable: ['Computer Science', 'Civil Engineering', 'Chemical Engineering'],
        facilities: [
          {
            name: 'Central Library',
            image: 'https://example.com/central-library.jpg',
          },
          {
            name: 'Hostel',
            image: 'https://example.com/hostel.jpg',
          },
          {
            name: 'Auditorium',
            image: 'https://example.com/auditorium.jpg',
          },
        ],
        certifications: [
          {
            name: 'NBA Accredited',
            image: 'https://example.com/nba-accredited.jpg',
          },
          {
            name: 'NAAC A',
            image: 'https://example.com/naac-a.jpg',
          },
        ],
        placementCompanies: [
          {
            name: 'TCS',
            image: 'https://example.com/tcs.jpg',
          },
          {
            name: 'Cognizant',
            image: 'https://example.com/cognizant.jpg',
          },
          {
            name: 'HCL',
            image: 'https://example.com/hcl.jpg',
          },
          {
            name: 'Wipro',
            image: 'https://example.com/wipro.jpg',
          },
        ],
      },
    ],
  },
  Arts: {
    Coimbatore: [
      {
        name: 'Government Arts College',
        fees: '₹20,000 - ₹50,000',
        managementFees: '₹50,000',
        govtQuotaFees: '₹20,000',
        image: require('../../assets/govartscbe.jpg'),
        description: 'A prestigious institution offering a variety of undergraduate and postgraduate programs in arts.',
        admissionsDone: '100+ admissions done',
        coursesAvailable: ['English Literature', 'History', 'Fine Arts'],
        facilities: [
          {
            name: 'Library',
            image: 'https://example.com/library.jpg',
          },
          {
            name: 'Cafeteria',
            image: 'https://example.com/cafeteria.jpg',
          },
          {
            name: 'Auditorium',
            image: 'https://example.com/auditorium.jpg',
          },
        ],
        certifications: [
          {
            name: 'NAAC B',
            image: 'https://example.com/naac-b.jpg',
          },
          {
            name: 'ISO 9001:2015',
            image: 'https://example.com/iso-9001.jpg',
          },
        ],
        placementCompanies: [
          {
            name: 'Infosys',
            image: 'https://example.com/infosys.jpg',
          },
          {
            name: 'Wipro',
            image: 'https://example.com/wipro.jpg',
          },
          {
            name: 'TCS',
            image: 'https://example.com/tcs.jpg',
          },
          {
            name: 'Capgemini',
            image: 'https://example.com/capgemini.jpg',
          },
        ],
      },
      {
        name: 'PSG College of Arts and Science',
        fees: '₹30,000 - ₹70,000',
        managementFees: '₹60,000',
        govtQuotaFees: '₹30,000',
        image: require('../../assets/psgarts.jpg'),
        description: 'Known for its strong emphasis on research and quality education in the arts and sciences.',
        admissionsDone: '80+ admissions done',
        coursesAvailable: ['Psychology', 'Sociology', 'Visual Communication'],
        facilities: [
          {
            name: 'Computer Lab',
            image: 'https://example.com/computer-lab.jpg',
          },
          {
            name: 'Art Studio',
            image: 'https://example.com/art-studio.jpg',
          },
          {
            name: 'Library',
            image: 'https://example.com/library.jpg',
          },
        ],
        certifications: [
          {
            name: 'NAAC A',
            image: 'https://example.com/naac-a.jpg',
          },
          {
            name: 'ISO 9001:2015',
            image: 'https://example.com/iso-9001.jpg',
          },
        ],
        placementCompanies: [
          {
            name: 'HDFC Bank',
            image: 'https://example.com/hdfc.jpg',
          },
          {
            name: 'ICICI Bank',
            image: 'https://example.com/icici.jpg',
          },
          {
            name: 'Amazon',
            image: 'https://example.com/amazon.jpg',
          },
          {
            name: 'Flipkart',
            image: 'https://example.com/flipkart.jpg',
          },
        ],
      },
    ],
    Chennai: [
      {
        name: 'University of Madras',
        fees: '₹25,000 - ₹55,000',
        managementFees: '₹70,000',
        govtQuotaFees: '₹25,000',
        image: require('../../assets/psg.jpg'),
        description: 'One of the oldest universities in India, offering various undergraduate and postgraduate courses.',
        admissionsDone: '200+ admissions done',
        coursesAvailable: ['History', 'Literature', 'Fine Arts'],
        facilities: [
          {
            name: 'Library',
            image: 'https://example.com/library.jpg',
          },
          {
            name: 'Research Centre',
            image: 'https://example.com/research-centre.jpg',
          },
          {
            name: 'Auditorium',
            image: 'https://example.com/auditorium.jpg',
          },
        ],
        certifications: [
          {
            name: 'NAAC A',
            image: 'https://example.com/naac-a.jpg',
          },
          {
            name: 'ISO 9001:2015',
            image: 'https://example.com/iso-9001.jpg',
          },
        ],
        placementCompanies: [
          {
            name: 'IBM',
            image: 'https://example.com/ibm.jpg',
          },
          {
            name: 'TCS',
            image: 'https://example.com/tcs.jpg',
          },
          {
            name: 'Infosys',
            image: 'https://example.com/infosys.jpg',
          },
          {
            name: 'Wipro',
            image: 'https://example.com/wipro.jpg',
          },
        ],
      },
    ],
  },
};

export default collegeData;
