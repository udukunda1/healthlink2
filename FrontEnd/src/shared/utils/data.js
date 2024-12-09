import pharma1 from '../../image/pharma1.png';
import pharma2 from '../../image/pharma2.png';
import pharma3 from '../../image/pharma3.png';
import obed from '../../image/obed.jpeg';
import cynthia from '../../image/cynthia.jpeg';
import silas from '../../image/silas.jpeg';
import optica from '../../image/optica.png';
import goodlife from '../../image/goodlife.png';
import lotus from '../../image/lotus.png';
import ketie from '../../image/ketie.png';

export const pharmacies = [
    {
        id: '1',
        image: pharma1,
        title: 'Kigali Pharma',
        address: 'Kigali Nyarugenge Town',
        tel: '+250780058709',
        workingHours: '24/7',
        avairableServises: [
            "Prescription Filling",
            "Medication Refills",
            "Transfer Prescriptions",
            "Medication Synchronization",
            "Controlled Substance Dispensing",
            "Automated Refill Reminders"
        ],
        inventory: {
            updatedAt: '21/4/2024',
            medicines: [
                "Aspirin",
                "Ibuprofen",
                "Metformin",
                "Lisinopril",
                "Albuterol"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Nzayisenga Emmanuel',
                content: '"Exceptional service with friendly staff! Always willing to help and answer my questions."'
            },
            {
                image: silas,
                name: 'Nsengiyumva Clement',
                content: '"Clean, welcoming environment and excellent customer service! They truly care about their patients."'
            },
            {
                image: cynthia,
                name: 'Denise MUHORAKEYE',
                content: '"Great selection of products and knowledgeable pharmacists! I always leave feeling well-informed."'
            }
        ]
    },
    {
        id: '2',
        image: pharma2,
        title: 'Mediasol',
        address: 'Musanze Branch',
        tel: '+250788000001',
        workingHours: '24/7',
        avairableServises: [
            "Prescription Filling",
            "Health Screenings",
            "Medication Therapy Management",
            "Vaccination Services",
            "Diabetes Education",
            "Nutritional Counseling"
        ],
        inventory: {
            updatedAt: '15/4/2024',
            medicines: [
                "Amoxicillin",
                "Atorvastatin",
                "Omeprazole",
                "Sertraline",
                "Ibuprofen"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Jean Claude',
                content: '"The staff are very helpful and knowledgeable!"'
            },
            {
                image: silas,
                name: 'Marie Claire',
                content: '"I appreciate their quick service and friendly staff."'
            }
        ]
    },
    {
        id: '3',
        image: pharma3,
        title: 'Salus Pharmacy',
        address: 'Kigali Kicukiro Town',
        tel: '+250788000002',
        workingHours: '24/7',
        avairableServises: [
            "Over-the-Counter Products",
            "Medication Reviews",
            "Chronic Disease Management",
            "Compounding Services",
            "Home Health Care Products",
            "Wellness Programs"
        ],
        inventory: {
            updatedAt: '11/4/2024',
            medicines: [
                "Acetaminophen",
                "Lisinopril",
                "Sertraline",
                "Omeprazole",
                "Albuterol"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Pierre Ngabo',
                content: '"Always well-stocked and organized!"'
            },
            {
                image: silas,
                name: 'Aline Uwase',
                content: '"The pharmacists here really know their stuff!"'
            }
        ]
    },
    {
        id: '4',
        image: optica,
        title: 'Optica Pharma',
        address: 'Kigali SilverBack Mall',
        tel: '+250788000003',
        workingHours: '24/7',
        avairableServises: [
            "Eye Care Products",
            "Vision Testing",
            "Contact Lens Fitting",
            "Optical Dispensing",
            "Prescription Glasses",
            "Sunglasses"
        ],
        inventory: {
            updatedAt: '30/10/2024',
            medicines: [
                "Aspirin",
                "Metformin",
                "Lisinopril",
                "Albuterol",
                "Ibuprofen"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Solange Umutoni',
                content: '"Fantastic service with a focus on eye care!"'
            },
            {
                image: silas,
                name: 'John Rukundo',
                content: '"Very professional staff and great selection."'
            }
        ]
    },
    {
        id: '5',
        image: goodlife,
        title: 'Good Life',
        address: 'It\'s Lit Out There',
        tel: '+250788000004',
        workingHours: '24/7',
        avairableServises: [
            "Health Screenings",
            "Nutritional Counseling",
            "Vaccination Services",
            "Chronic Disease Management",
            "Wellness Programs",
            "Medication Refills"
        ],
        inventory: {
            updatedAt: '28/3/2023',
            medicines: [
                "Omeprazole",
                "Sertraline",
                "Amoxicillin",
                "Ibuprofen",
                "Aspirin"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Chantal Mukamana',
                content: '"A very caring and helpful team!"'
            },
            {
                image: silas,
                name: 'Eric Manzi',
                content: '"Always a pleasant experience!"'
            },
            {
                image: cynthia,
                name: 'Innocent Kayitesi',
                content: '"Quick and efficient service every time!"'
            },
            {
                image: obed,
                name: 'Patricia Umulisa',
                content: '"The staff are always friendly and attentive!"'
            }
        ]
    },
    {
        id: '6',
        image: lotus,
        title: 'Lotus Medical Group',
        address: 'Kabuga',
        tel: '+250788990376',
        workingHours: 'Always',
        avairableServises: [],
        inventory: {
            updatedAt: '28/3/2023',
            medicines: []
        },
        studentsReviews: []
    },
    {
        id: '7',
        image: ketie,
        title: 'Ketty\'s Health Hub',
        address: 'Kabeza KGL',
        tel: '+250788990376',
        workingHours: '7am - 7pm',
        avairableServises: [
            "Health Screenings",
            "Nutritional Counseling",
            "Vaccination Services",
            "Chronic Disease Management",
            "Wellness Programs",
            "Medication Refills"
        ],
        inventory: {
            updatedAt: '20/1/2023',
            medicines: [
                "paracetamol",
                "ongera",
                "Amox",
                "pametin",
                "Aspirin"
            ]
        },
        studentsReviews: [
            {
                image: obed,
                name: 'Mutony melinda',
                content: '"Poor service don\'t go there!"'
            }
        ]
    }
];
