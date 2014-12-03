## Enigma Machine Cipher ##

This project is a website that will compute basic encryptions based on the WWII Nazi Enigma Machine.

The website is an AngularJS-NodeJS-Express server.

[View Live Website](http://enigmamachine.herokuapp.com/)

### System Configs ###

**Created and Tested With:**

* Mac OSX 10.10
* Virtualbox 4.3.8 r92456
* Vagrant 1.4.3
* Grunt v0.1.13
* Bower version 1.2.8

* Uses Grunt Watch, which can be fully appreciated with the [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/details) plugin in Chrome

**Server Side Dependencies:**

* Node v0.10.26
	* Express

These are all installed when you run the bootstrap file. Specific versions of the node modules can be found in the www/package.json file.

**Front End Dependencies:**
* AngularJS

Versions of all of these can be found in the package.json file and the bower.json file.

### Getting Started ###

**To run this VM, you should have Vagrant installed. It makes things easier.**

As an alternative, you can run the live versions of the bootstrap and setup confs(found in the livescripts directory) in your Ubuntu server environment.

**After cloning the repo, start up the Vagrant box:**

`vagrant up`

`vagrant ssh`

`cd /vagrant`

`sh bootstrap.sh`

**Then, from your local machine:**

`cd www/public_src/libs`

`bower install`

`cd ../../`

`grunt build`

Navigate to `http://localhost:8082` in your browser to see the action!

**Run grunt watch for live editing/minification:**

`grunt watch`

### Server Editing ###

Keep in mind that changes made on the server require server restarts, so Node can reload the changes:

`sudo stop nodeserver`

`sudo start nodeserver`

Error logs can be found here: `/var/log/nodeserver.sys.log`


### Live Deployment ###

For the live versions of the bootstrap and config files, look in the livescripts directory.

The .conf files should go into the /var directory, and the bootstrap.sh file should be in the /var/www directory.

### About the Server ###

The node Express server will run as a daemon script, and will restart after reboot using Upstart (installed in the bootstrap. See the nodeserver.conf file for settings).

It is kept running using Monit, which will keep it running through errors and problems (see nodeservermonit.conf for more info)

###Credits:###
* Original server built by [Nathanael Marquardt](https://github.com/NathanMarq/angular-node-server).
* Enigma code adapted from [Nen Elsen](https://github.com/benelsen/enigma).
