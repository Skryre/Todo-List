export default class Task {
    constructor(title, dueDate, note, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.note = note;
        this.priority = priority;
    }
    setTitle(title) {
        this.title = title
    }

    setDate(dueDate) {
        this.dueDate = dueDate
    }

    setNote(note){
        this.note = note
    }

    setPriority(priority){
        this.priority = priority
    }

    returnTitle() {
        return this.title
    }
    
    returnDate() {
        return this.dueDate
    }

    returnNotes() {
        return this.note
    }


    returnPriority() {
        return this.priority
    }
    
}