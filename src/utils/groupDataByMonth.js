import {format} from 'date-fns'

const groupDataByMonth = (data) => {

    const monthsData = {};
    data.forEach(day => {
        const date = new Date(day.date);
        const month = format(date, 'MMM-yyyy');
        let monthData = monthsData[month];
        if(monthData === undefined){
            monthData = {
                new_cases: 0,
                new_deaths: 0,
            }
        }
        monthData.new_cases += day.new_cases;
        monthData.new_deaths += day.new_deaths;
        monthsData[month] = monthData;
    });
    const dataArray = Object.entries(monthsData).map(([key, value]) => {
        return {month: key, ...value}
    });
    return dataArray;
};

export default groupDataByMonth;
