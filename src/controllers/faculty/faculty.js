import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

// Faculty list page
const facultyListPage = (req, res) => {
    const sortBy = req.query.sort || 'name';
    const faculty = getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty,
        currentSort: sortBy
    });
};

// Faculty detail page
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const member = getFacultyById(facultyId);

    if (!member) {
        const err = new Error('Faculty member not found');
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: member.name,
        faculty: member
    });
};

export { facultyListPage, facultyDetailPage };