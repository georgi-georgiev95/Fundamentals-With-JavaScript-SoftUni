function companyEmployeesInfo(input) {
    let companies = {};
    input.forEach(line => {
        let [company, id] = line.split(' -> ');
        if (companies[company]) {
            let currentInfo = companies[company];
            if (!currentInfo.includes(id)) {
                let updatedInfo = currentInfo + ' ' + id;
                companies[company] = updatedInfo;
            }
        } else {
            companies[company] = id;
        }
    })

    let sortedInfo = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
    for (let companyInfo of sortedInfo) {
        console.log(`${companyInfo[0]}`);
        if (companyInfo[1].includes(' ')) {
            let workersId = companyInfo[1].split(' ');
            for (let workerId of workersId) {
                console.log(`-- ${workerId}`);
            }
        } else {
            console.log(`-- ${companyInfo[1]}`);
        }
    }
}
companyEmployeesInfo([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
)