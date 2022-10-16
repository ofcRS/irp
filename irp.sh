yarn init -y

yarn add $(tr -s '[:space:]' ' ' < "$(dirname "$(readlink -f "$0")")/dependencies-list")

touch .gitignore
echo "node_modules/*" >> .gitignore
echo "webpack/*" >> .gitignore

node "$(dirname "$(readlink -f "$0")")/initConfigs.mjs"