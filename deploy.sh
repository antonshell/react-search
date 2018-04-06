npm run build
cp -R proxy build/

rm -rf /Users/antonshell/Projects/220v_search/public/web
cp -r build /Users/antonshell/Projects/220v_search/public/web
mkdir /Users/antonshell/Projects/220v_search/public/web/api
cp /Users/antonshell/Projects/220v_search/public/index_front.php /Users/antonshell/Projects/220v_search/public/web/api/index.php