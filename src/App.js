import Users from './User';

function App() {
    let data = [{
            grid: 1,
            name: 'Kishan',
            email: 'kishan@gmail.com',
            password: 'kishan@123',
            course: ["HTML-", "CSS-", "BootStrap-", "js"],
            city: "Surat"
        },
        {
            grid: 2,
            name: 'Jay',
            email: 'jay@gmail.com',
            password: 'jay@123',
            course: ["Photoshop-", "Figma-", "Illustrator-", "Adobe"],
            city: "Rajkot"
        },
        {
            grid: 3,
            name: 'Ajay',
            email: 'ajay@gmail.com',
            password: 'ajay@123',
            course: ["HTML-", "CSS-", "BootStrap-", "Nodejs"],
            city: "Amreli"
        },
        {
            grid: 4,
            name: 'Nisha',
            email: 'nisha@gmail.com',
            password: 'nisha@123',
            course: ["HTML-", "CSS-", "BootStrap-", "Python"],
            city: "Jamanagar"
        },
        {
            grid: 5,
            name: 'Krishna',
            email: 'krishna@gmail.com',
            password: 'krishna@123',
            course: ["Photoshop-", "Figma-", "Illustrator-", "Adobe"],
            city: "Bhopal"
        },
        {
            grid: 6,
            name: 'Smit',
            email: 'smit@gmail.com',
            password: 'smit@123',
            course: ["HTML-", "CSS-", "BootStrap-", "Python"],
            city: "Vadodara"
        },
        {
            grid: 7,
            name: 'Nikunj',
            email: 'nikunj@gmail.com',
            password: 'nikunj@123',
            course: ["HTML-", "CSS-", "BootStrap-", "js"],
            city: "Navsari"
        },
        {
            grid: 8,
            name: 'Harvi',
            email: 'harvi@gmail.com',
            password: 'harvi@123',
            course: ["Photoshop-", "Figma-", "Illustrator-", "Adobe"],
            city: "Ahemedabad"
        }

    ]
    return ( <
        Users usersList = {
            data
        }
        / >
    )
}

export default App;