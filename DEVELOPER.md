# To Update MDL version:
1. Modify `package.js`:
	1. Modify `mdcVersion` to the new MDC version.
	2. Reset `revision` to zero.
2. Run `meteor test-packages ./` in the package root directory to update dependencies in `package.js`.
3. Verify in the correct files are in `dist/`.
4. Run `scripts/update-assets.js` to update asset references in `package.js`.
5. Validate `package.js`, make sure it looks alright.
6. Commit the changes.
7. Publish the package.
