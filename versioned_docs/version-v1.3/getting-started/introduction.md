---
title: Introduction
slug: /
---

## What is KubeVela?

KubeVela is a modern software delivery platform that makes it easier and faster to deliver and manage applications across hybrid, multi-cloud environments. 

Using KubeVela, software teams can build cloud native applications per needs as they grow, then deliver them anywhere.

![](../resources/what-is-kubevela.png)


## Key Features

* **Unified Application Delivery Experience**

    KubeVela introduces a [unified and cross-platform delivery model(OAM)](https://oam.dev/) that allows you to deploy any workload type, including containers, databases, or even VM instances to any cloud or Kubernetes clusters. It helps you to just write application once, and deliver it the same everywhere, no more re-writing everything from scratch for any new delivery target.

* **Automated Deployment across Clusters**

    KubeVela natively supports rich continuous delivery strategies in various multi-cluster/hybrid-cloud scenarios or mixed environments. These strategies provides efficiency and safety to the distributed delivery process. The centralized management reduces the burden of looking over each clusters and gives unified experience across platforms. With KubeVela, you don't need to have any Ph.D. degree in Kubernetes to run automatic deployments.
    
* **Declarative and Highly Extensible Workflow**

    The application delivery process is driven by declarative workflow. Executed by reconciliation loops with limited privileges, the workflow is both robust and secure enough to prevent any unexpected configuration drifts. Users can also make arbitrary reusable customizations to the workflow through writing CUE definitions. The extensibility will always satisfy your growing business demands while keeping your production safe with continuous enforcement at the same time.


## KubeVela vs. Other Software

### KubeVela vs. CI/CD (GitHub Actions, GitLab, CircleCI, Jenkins, etc.)

KubeVela is a continuous delivery platform that works at downstream of your CI process. So you will reuse the CI process you already adopted, and KubeVela will take over CD process by empowering it with modern application delivery best practices, such as hybrid/multi-cloud promotion workflow, unified cloud resource provision/binding, and much more. KubeVela is fully declarative by design, it natively supports GitOps if you want.

> Feel free to check the [Integrating with Jenkins](./tutorials/jenkins) or [GitOps](./case-studies/gitops) documentation for more details.

### KubeVela vs. GitOps (ArgoCD, FluxCD, etc.)

KubeVela adopts your GitOps process and improves it by adding multi-cluster/hybrid-cloud capabilities:

* KubeVela has a user-friendly and programable workflow that allows you to integrate any of your delivery steps, including approval and notification flows. 
* With the help of the workflow, KubeVela can provide cross-environment promotion for your multi-cluster/hybrid-cloud applications.


### KubeVela vs. PaaS (Heroku, Cloud Foundry, etc.)

KubeVela is not a PaaS, but you can use it to add PaaS-like features to your application delivery process:

* A simple deployment abstraction for the developer
* A catalog of possible customizations(addons), managed by the platform team
* On-demand staging or development environments

Using KubeVela is a good way to get many of the benefits of a PaaS (developer productivity and peace of mind), without giving up any **flexibility** to take full control over your infrastructure and tooling.


### KubeVela vs. Helm 

Helm is a package manager for Kubernetes that provides package, install, and upgrade a set of YAML files for Kubernetes as a unit. 

KubeVela as a modern delivery system can naturally deploy Helm charts. For example, you could use KubeVela to define an application that is composed by a WordPress chart and a AWS RDS Terraform module, orchestrate the components' topology, and then deploy them to multiple environments following certain strategy.

Of course, KubeVela also supports other encapsulation formats including Kustomize etc.


### KubeVela vs. Kubernetes

KubeVela is a modern application delivery system built with cloud native stack. It leverages [Open Application Model](https://github.com/oam-dev/spec) and Kubernetes as control plane to resolve a hard problem - making shipping applications enjoyable.


Welcome onboard and sail Vela!


## What's Next

- Start to [install KubeVela](./install).
