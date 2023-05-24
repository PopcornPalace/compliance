import csv
from github import Github

# Получаем персональный токен из аргументов командной строки
GITHUB_TOKEN = sys.argv[1]
ORG = sys.argv[1]

# Создаем объект Github
g = Github(GITHUB_TOKEN)

# Получаем организацию
org = g.get_organization(ORG)

# Открываем файл для записи CSV
with open('users_permissions.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)

    # Записываем заголовок таблицы
    writer.writerow(['organization', 'repository', 'name', 'login', 'permission'])

    # Проходимся по всем репозиториям организации
    for repo in org.get_repos():
        # Проходимся по всем пользователям репозитория
        for user in repo.get_collaborators():
            # Получаем роль пользователя
            permission = repo.get_collaborator_permission(user)

            # Записываем информацию в CSV файл
            writer.writerow([org.name, repo.name, user.name, user.login, permission])
