import express from "express"
import bodyParser from "body-parser";


const app = express();
//using body parser to parse each data request/response
app.use(bodyParser.json())
const PORT = 7777;

app.all("/", (req, res) => {
    res.send("serevr running sucessfully. msg sent")
})
const projects = [
    {
    id: 1,
    status: "not started",
    phase: "JSD",
    comments: "comments sample"
},
{
    id: 2,
    status: "not started",
    phase: "JSD",
    comments: "comments sample"
}]
//Reading data
app.get('/projects', (req, res) => {
    res.json(projects)
})
//Creating new data
app.post('/projects', (req, res) => {
    const newProject = req.body;
    projects.push(newProject);
    res.json({
        message: "New Project added"
    })
})
//updating data
app.put('/projects/:id', (req, res) => {
    const newProjectData = req.body;
    const paramId = Number(req.params.id)
    const projectId = projects.findIndex(project => project.id === paramId)
    if (projectId !== -1) {
        projects[projectId] = {
            id: paramId,
            ...newProjectData,
        }
        
    res.json({
        message: "Project updated successfully"
    })
    }
})

//deleting the project

//updating data
app.delete('/projects/:id', (req, res) => {
    const paramId = Number(req.params.id)
    const projectId = projects.findIndex(project => project.id === paramId)
    if (projectId !== -1) {
        projects.splice(projectId, 1)
    }
    res.json({
        message: "Project deleted successfully"
    })
})

app.listen(PORT, () => {
    console.log(`port running at ${PORT}`)
})