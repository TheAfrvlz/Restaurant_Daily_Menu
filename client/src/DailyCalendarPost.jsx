import './DailyCalendarPost.css'


function DailyCalendarPost (props) {
    return (
        <div className='DailyCalendarPost' >
            <h1 > {props.Day} </h1>
            <form>
                <input type="text" placeholder='Sopa' />
                <input type="text" placeholder='Guisado' />
                <input type="text" placeholder='Guarnicion' />
                <input type="text" placeholder='Postre' />
                <input type="text" placeholder='Agua' />
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}

export default DailyCalendarPost
