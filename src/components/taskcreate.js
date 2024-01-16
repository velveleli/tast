function TaskCreate() {
    return( 
     <div className="task-create">
        <h3>Lütfen Task Ekleyiniz!</h3>
        <form className="task-form">
            <label className>Başlık</label>
            <input/>
            <label>Task Giriniz!</label>
            <textarea/>
            <button>Oluştur!</button>
        </form>
    </div>
    );
}

export default TaskCreate;
