yarn init -y

touch .gitignore
echo "node_modules/*" >> .gitignore
echo "webpack/*" >> .gitignore

node "$(dirname "$(readlink -f "$0")")/initializeConfigs.mjs"