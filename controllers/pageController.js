const getTodoPage = (req, res) =>{
    res.render('todo');
}

const getCategoryPage = (req, res) => {
    res.render('category');
}

export {getTodoPage, getCategoryPage};