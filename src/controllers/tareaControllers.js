const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tareas', (err, tareas) => {
            if (err) {
                res.json(err);
            }
            console.log(tareas);
            res.render("tareas", {
                data: tareas
            });
        });
    });
};

controller.form = (req, res) => {
    res.render("formulario");
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tareas set ?', [data], (err, tareas) => {
            console.log(tareas);
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const {
        id
    } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tareas WHERE id = ?', [id], (err, tareas) => {
            res.render('tareas_edit', {
                data: tareas[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const {
        id
    } = req.params;
    const newTarea = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tareas set ? WHERE id = ?', [newTarea, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const {
        id
    } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tareas WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
};

module.exports = controller;