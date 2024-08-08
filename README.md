# NgJobSearch

This is a fork of the provided Angular Training Task for Certification.

Please find the current state deployed here:
GitHub: https://github.com/StephanSinn/ng-job-search
Vercel: https://ng-job-search-stephansinns-projects.vercel.app/

Remarks:
Since this practice focused more on the actual result than on covering all parts of the training, 
I like to refer to the other sample project (covering forms and custom directives as well), which I did in preparation for this certification:
GitHub: https://github.com/StephanSinn/weather
Vercel: https://vercel.com/stephansinns-projects/weather

For the addition and removal ob the job to the list of favorites, another possible way is by using ngContent. I also used this, as you can see from 
the git history. I decided to fulfil the task by Event Binding, since I already demonstrated the usage of ngContent in another component.  

I interpreted the Back button to lead the user back to where he/she came from, not only to the jobs page ('/'), 
so that a user will also go back to favorites when he looks on the details from the favorites page.
