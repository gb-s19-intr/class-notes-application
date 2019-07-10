# Planning & Documentation
Design process notes.

----

## Weekly Notes
| Week    | Date          | Notes |
| ------- | ------------- | ----- |
| 01 | July 3rd, 2019 | [2019-07-03.md](notes/19-07-03.md) |
| 02 | July 10th, 2019 | [2019-07-10.md](notes/19-07-10.md) |


## Scheduled To-Do

### Week 01

#### In Class
1. Application discussion
2. Split into groups
3. Group concept discussion, design and wireframing
4. Create a Github "Organization" named for your project concept
     - Small letters, `-` instead of spaces
5. **Each group will "Fork" a version of this project**
     - Name the new repository `org-name.github.io` (where `org-name` is the name of your organization)
     - To be sure you don't get confused, delete the current version of this repo sitting on your local computer
     - Add all users to the fork
     - Clone the "fork" version
6. Edit `planning/design/README.md` to include all of your process images and necessary notes/annotations
     - Name all images appropriately (small letters, `-` instead of spaces) and place into `planning/design` (see example file linked)
         - For hand-drawn wireframes, take clear individual photos
         - For anything digital, output a low/med-res image file
     - Come up with a rough design guide of colours and fonts to be used
         - These be revisited later, of course
7. Distribute tasks amongst members
     - Ideally each member would be responsible for one page or interface
8. In the `src` folder, create the necessary html files to build the prototype interface for your application
     - Note, two are already made for you (`index.html` and `notes.html`; rename or delete as necessary)
9. Commit all edits/notes and push to the new forked repository

#### Take Home
1. Each user should create a new branch named after their assigned page/interface
2. Work inside of `/src` to develop your interface
     - Keeping CSS into your own named CSS files makes sense to start (ie, `notes.html` uses `notes.css` as its primary stylesheet)
     - Continue to commit and push changes to the remote server as frequently as you can
3. Once all members have completed work, merge the branches into `master`
     - Resolve any merge conflicts that arise as you go by deciding which version to keep. Remember that all code is still store in a commit within the branch itself, so there's no risk of overwriting code and not being able to retrieve it again later
     - Look for overlapping rules or style concepts and centralize them into `style.css`
     - Ensure the pages are linked together


### Week 02

#### In Class

1. Update from the original course repository
2. Merge all student branches to build the prototype + merge conflics + push to remote
3. Test and write at least 3 Github "issues" per page
4. Resolve any issues that pertain to your work
5. Back together as a group:
     - fetch any new changes made
     - Determine a style guide and implement that into CSS in a new branch (one or many branches)
     - Discuss any adjustments that need to be made
     - Ensure all pages are now linking to eachother
     - Merge any new branches together
     - Everyone fetches and retests the application as a group
6. Another round of "Issues"
7. Resolve all issues (repeat above)
8. Swap with the other group for comments
9. Resolve all issues
10. Present the current application prototype to the class