from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in project_and_tasks/__init__.py
from project_and_tasks import __version__ as version

setup(
	name="project_and_tasks",
	version=version,
	description="TO get a view of the tasks as description on your project doctype",
	author="Mayank Nahata",
	author_email="mayanknahata007@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
