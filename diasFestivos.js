function countHours(year, holidays) {

    let newday;
    let daynames;

    let newHolydays = holidays.map((holy)=>{
         newday = new Date(`${holy}/${year}`)
         daynames = newday.getDay()

         return daynames

        // console.log(newday)

        })
        
    let extraDays = newHolydays.filter((zero)=>{
        return zero !== 0 && zero !== 6
    })

    console.log(extraDays)

    return extraDays.length*2

}

countHours(2023, ['01/06', '04/01', '12/25'])