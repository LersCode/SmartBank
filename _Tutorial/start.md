# Create project and install dependecies

> What you need:
>
> - npm installed
> - IDE of your choice

## Step 1 -- Create a new project

1. Create new project-folder `SmartBank` at a location of your choice
2. Open the new created folder in a command-prompt
3. Create a new Angular project with `ng new SmartBank`
   > If you want to create a new Project with a specific Angular version you can use the following command `npx @angular/cli@version new SmartBank`.
4. Open the new project-folder in your IDE
5. Start the app with `npm start`

## Step 2 -- Clean project files

1. Go to `src/app/app.component.html` and delete all EXECPT `<router-outlet></router-outlet>`
2. Add `<p>root</p>` into `src/app/app.component.html`

## Step 3 -- Install dependecies

### Install Material

1. Run `ng add @angular/material`
2. Choose the following options:
   - execution => yes
   - theme => Purple/Green
   - typography => yes
   - animations => yes

## Step 4 -- Import Fonts

1. Go to `src/index.html` and add the following (check for duplets before pasting):
   ```
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
   <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500&display=swap" rel="stylesheet"/>
   <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500&display=swap" rel="stylesheet"/>
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
   ```
   > Note: It's not the best use to directly link to google-servers. If thats a problem in your project, follow the links and download the fonts to link them locally!

## Step 5 -- Set root styles

1. Go to `src/styles.scss` and customize the styles so they look like the following:

   ```
   *,
   html {
     box-sizing: border-box;
   }

   html,
   body {
     height: 100%;
   }
   body {
     margin: 0;
     font-family: Roboto, "Helvetica Neue", sans-serif;
   }
   ```

## Step 6 -- Restart

1. Re-start `ng serve`.

## Step 7 -- Create MaterialModule

1. Go to `src/app` and create a file `material.module.ts`.
2. Copy the following Code into the new file:

   ```
   import { NgModule } from '@angular/core';
   import { MatButtonModule } from '@angular/material/button';

   const modules = [MatButtonModule];

   @NgModule({
     imports: modules,
     exports: modules,
   })
   export class MaterialModule {}
   ```

   > Note: this file will be used to import all material-modules and to keep the `app.module.ts` clean.

## Step 8 -- Test Material Module(s)

1. Paste the following into your `app.component.html`:

   ```
   <button mat-raised-button>Basic</button>
   <button mat-raised-button color="primary">Primary</button>
   <button mat-raised-button color="accent">Accent</button>
   <button mat-raised-button color="warn">Warn</button>
   <button mat-raised-button disabled>Disabled</button>
   ```

2. Import the MatButtonModule into your `material.module.ts`:
   ```
   import { MatButtonModule } from '@angular/material/button';
   ```
3. Add the MatButtonModule to the `modules` array:

   ```
   e.g.:
   const modules = [MatButtonModule];
   ```

   > Note: You can delete the imports and `<button>`-tags, if it worked, so you have a clean start.

   > Note: You can import all modules you want to use in your project. For a list of all modules, check out the [Material Docs](https://material.angular.io/components/categories).

## Step 9 -- Commit changes

1. Commit your made changes. (e.g. Commit-message: `Imported Material and cleaned project`)

## Step 10 -- Finished 🏁
