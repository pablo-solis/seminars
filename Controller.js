
app.controller('Controller',['$scope',
function($scope){

$scope.aaa = false;

$scope.hack = function(title,person,abs){
  $scope.aaa = true;
  $scope.habs=abs;
  $scope.htitle=title;
  $scope.hperson=person;
  };

$scope.seminars = [
{type:'Algebraic Geometry',
time:'4 pm',
days:'Monday',
location:'257 Sloan',
year:2015,
quarter:'Fall',
speakers:[{date:new Date('2015','07','24'),
                    name:'Michel van Garrel',
                    title:'Relative BPS state counts for del Pezzo surfaces',
                    school:'KIAS',
                    abs:'In the most general mirror construction up to date, Gross and Siebert construct mirrors to log Calabi-Yau pairs with maximal boundary. In dimension 2, we consider instead the related case of log Calabi-Yau surface pairs with smooth boundary. Associated to it are relative BPS state counts, its A-model invariants. We show how these are related via loop quiver DT invariants to the local BPS state counts (the A-model invariants of the corresponding local Calabi-Yau threefold). This is joint work with T. Wong and Gj. Zaimi.'}
,
  {date:new Date('2015','08','28'),
            name:'TBD',
            title:'???',
            school:'???',
            abs:''}
            ,
            {date:new Date('2015','09','05'),
              name:'TBD',
              title:'???',
              school:'???',
              abs:''}
            ,
            {date:new Date('2015','09','12'),
              name:'TBD',
              title:'???',
              school:'???',
              abs:''}
              ,
            {date:new Date('2015','09','19'),
              name:'TBD',
              title:'???',
              school:'???',
              abs:''}
            ,
            {date:new Date('2015','09','26'),
              name:'TBD',
              title:'???',
              school:'???',
              abs:''}
            ,
            {date:new Date('2015','10','02'),
              name:'TBD',
              title:'???',
              school:'???',
              abs:''}
            ,
            {date:new Date('2015','10','09'),
              name:'TBD',
              title:'???',
              school:'???',
              abs:''}
            ,
            {date:new Date('2015','10','16'),
              name:'TBD',
              title:'???',
              school:'???',
              abs:''}
              ,
              {date:new Date('2015','10','23'),
                name:'Claudiu Raicu',
                title:'???',
                school:'???',
                abs:''}
              ,
              {date:new Date('2015','10','30'),
                name:'TBD',
                title:'???',
                school:'???',
                abs:''}
              ,
              {date:new Date('2015','11','07'),
                name:'Sam Raskin',
                title:'???',
                school:'MIT',
                abs:''}

            ]
},

{type:'Algebraic Geometry',
time:'4 pm',
days:'Monday',
location:'257 Sloan',
year:2015,
quarter:'Spring',
speakers:[{date:new Date('2015','02','30'),
            name:'Noah Giansiracusa',
            title:'Tropical schemes and the Berkovich analytification ',
            school:'University of Georgia',
            abs:'In "In "Equations of tropical varieties," J.H.Giansiracusa and I introduced a scheme-theoretic framework for tropicalization and tropical geometry. In this talk I\'ll discuss recent developments in this program. Specifically, we introduce a canonical embedding of any scheme in an F1-scheme (in essence, a non-finite type toric variety) such that the corresponding tropicalization is the inverse limit of all tropicalizations and its T-points form the space underlying Berkovich\'s analytification. This is related to Payne\'s topological inverse limit result.'}
            ,
            {date:new Date('2015','03','27'),
            name:'Simon Schieder',
            school:'Harvard',
            title:'The Drinfeld-Lafforgue-Vinberg degeneration of the stack of G-bundles',
            abs:'We study the singularities of the Drinfeld-Lafforgue-Vinberg compactification of the moduli stack of G-bundles on a smooth projective curve for a reductive group G. The definition of this compactification is due to Drinfeld and relies on the Vinberg semigroup of G. We will mostly focus on the case G=SL_2; in this case the compactification can alternatively be viewed as a canonical one-parameter degeneration of the moduli stack of SL_2-bundles. We then study the singularities of this one-parameter degeneration via the associated nearby cycles construction. Time permitting, we might sketch a generalization to the case of an arbitrary reductive group G and the relation to Langlands duality.'}
            ,
            {date:new Date('2015','04','04'),
            name:'Carl Mautner',
            school:'UC Riverside',
            title:'The Decomposition Theorem and Parity Sheaves',
            abs:'The Decomposition Theorem of Beilinson, Bernstein, Deligne and Gabber is a massive generalization of certain theorems in Hodge theory. It is a powerful tool for studying the cohomology, with coefficients in a field of characteristic zero, of complex algebraic varieties. For applications to modular representation theory, it would be highly desirable to have an analog of the Decomposition Theorem that applies to the cohomology of complex algebraic varieties with coefficients in fields of characteristic p>0. In this talk, I will give a brief introduction to the Decomposition Theorem and discuss joint work with D. Juteau and G. Williamson, in which we provide a weak analog of the Decomposition Theorem, applicable to various examples of interest in modular representation theory.'},

            {date:new Date('2015','05','01'),
            name:'Xinwen Zhu',
            school:'Caltech',
            title:'Some D-modules attached to orbits of linear representations of algebraic groups',
            abs:'It is a prominent question to find integral representations of solutions of differential equations. In the language of D-modules, one asks whether a D-module, a priori defined by generators and relations, is of geometric origin (e.g. a Gauss-Manin connection). In this talk, I will discuss this question for a class of D-modules attached to orbits of linear representations of algebraic groups. Examples include Harish-Chandraâ€™s invariant holonomic systems, GKZ A-hypergeometric systems, and Lian-Song-Yauâ€™s tautological systems. Part of the talk is based work joint with Huang, Lian and Yau. '}

            ,
            {date:new Date('2015','03','27'),
            name:'Chris Lyons',
            school:'CSU Fullerton',
            title:'Two notions of mirror symmetry for certain K3 surfaces',
            abs:'In the mid-1990s, physicists Berglund and Hubsch proposed a way to construct a mirror partner for a certain kind of Calabi-Yau variety. When the variety has dimension 2, these are examples of K3 surfaces. Around the same time, Dolgachev and others conceived of a version of mirror symmetry that applies to more general families of K3 surfaces. We will introduce these special K3 surfaces, which are certain hypersurfaces in weighted projective space, and the question of compatibility between these two versions of mirror symmetry. While the question is open in general, we will highlight a collection of surfaces where it can be verified. This is joint work with Paola Comparin, Nathan Priddis, and Rachel Webb. '},
            ]
}
,


{type:'Algebraic Geometry',
time:'4 pm',
days:'Monday',
location:'257 Sloan',
year:2015,
quarter:'Winter',
speakers:[{date:new Date('2015','00','26'),
            name:'Izzet Coskun',
            school:'UIC',
            title:'The birational geometry of moduli spaces of sheaves on the plane ',
            abs:'I will describe joint work with Jack Huizenga and Matthew Woolf on the effective cone of the moduli spaces of sheaves on the plane. I will describe the solution of the higher rank interpolation problem for general sheaves and discuss when Brill-Noether divisors are effective. If time permits, I will discuss joint work with Jack Huizenga on the ample cone of the moduli spaces of sheaves.'}
            ,
            {date:new Date('2015','01','02'),
            name:'John Calabrese',
            school:'Rice',
            title:'Derived equivalent CY3folds from cubic fourfolds',
            abs:'The derived category of a cubic fourfold admits a decomposition with one factor being strikingly similar to the derived category of a K3 surface. For three special classes, one can construct geometrically a K3 which derived embeds into the derived category of the fourfold. Using ideas from the theory of homological projective duality one can then apply this idea in a family, obtaining a new derived equivalence between Calabi-Yau threefolds. This is joint work with Richard Thomas from Imperial College. '}
            ,
            {date:new Date('2015','01','09'),
            name:'Majid Hadian',
            school:'Caltech',
            title:'Universal unipotent local systems and Maurer-Cartan systems of algebraic cycles',
            abs:'It will be shown how studying universal unipotent local systems on algebraic curves leads to the consideration of "Maurer-Cartan type" systems of algebraic cycles on certain varieties. Such systems of algebraic cycles provide explicit presentations for motivic unipotent fundamental groups.'}
            ,
            {date:new Date('2015','01','13'),
            name:'Harold Williams',
            school:'University of Texas at Austin',
            title:'Toda Systems, Cluster Characters, and Spectral Networks',
            abs:'The past decade has revealed a deep but hidden interplay between the geometry of character varieties of surfaces and the representation theory of quivers. One rough way of stating this is that the coordinate ring of a (possibly wild) character variety can be viewed as a kind of Hall algebra for a quiver with potential. Somewhat more precisely, there are geometric and representation theoretic points of view on this ring with a priori distinct prescriptions for "canonical" elements of it, which coincide despite their definitions being fundamentally different in nature. We will discuss recent progress developing this circle of ideas, in particular for higher-rank gauge groups. A key organizing principle is the notion of cluster algebras and their canonical bases, whose origins go back to the work of Lusztig and Kashiwara in Lie theory. '}
            ,
            {date:new Date('2015','01','23'),
            name:'Steven Sam',
            school:'UC Berkeley',
            title:'Twisted commutative algebras and related structures',
            abs:'A recent series of results prove finiteness results for degrees of equations or syzygies for families of algebraic varieties by packaging them into a single algebraic structure and proving a noetherian result. I will survey some of this work, mostly related to Segre products of projective spaces and their secant varieties. Twisted commutative algebras appear as auxiliary structures and proving analogs of Hilbert\'s basis theorem for them has proven to be challenging. I will explain some of my recent work in this direction. '}
            ,
            {date:new Date('2015','01','09'),
            name:'Morgan Brown',
            school:'Michigan',
            title:'Rational Connectivity and Analytic Contractibility',
            abs:'Berkovich spaces are a natural setting for analysis on varieties over fields with non-archimedean valuation. They have been studied in a variety of contexts, including tropical geometry and number theory. I will give an introduction to Berkovich spaces, and explain recent connections between the theory of Berkovich spaces and the minimal model program. In particular, I will show that if $X$ is a rationally connected smooth projective variety over the Laurent series $\\mathbb{C}((t))$, the Berkovich space is a contractible topological space. This is joint work with Tyler Foster. '}
            ,
            {date:new Date('2015','01','16'),
            name:'Cynthia Vinzant',
            school:'NC State',
            title:'Determinantal representations of hyperbolic polynomials and hyperbolic varieties',
            abs:'If a real symmetric matrix of linear forms is positive definite at some point, then its determinant is a hyperbolic hypersurface. In 2007, Helton and Vinnikov proved a converse in three variables, namely that every hyperbolic plane curve has such a definite determinantal representation. Recently, some of this work has also been extended to varieties of higher codimension. I will talk about constructing definite determinantal representations of plane curves and a family of hyperbolic varieties whose Chow forms have determinantal representations.'}
            ]
}



,

{type:'Algebraic Geometry',
time:'4 pm',
days:'Monday',
location:'257 Sloan',
year:2014,
quarter:'Fall',
speakers:[{date:new Date('2014','09','06'),
            name:'Daniel Halpern-Leistner',
            school: 'IAS',
            title:'The structure of instability in moduli theory',
            abs:'In many examples of moduli stacks which come equipped with a notion of stable points, one tests stability by considering "iso-trivial one parameter degenerations" of a point in the stack. To such a degeneration one can often associate a real number which measures "how destabilizing" it is, and in these situations one can ask the question of whether there is a "maximal destabilizing" or "canonically destabilizing" degeneration of a given unstable point. I will discuss a framework for formulating and discussing this question which generalizes several commonly studied examples: geometric invariant theory, the moduli of bundles on a smooth curve, the moduli of Bridgeland-semistable complexes on a smooth projective variety, the moduli of K-stable varieties. The key construction in this story may be of independent interest: it assigns to any point in an algebraic stack a topological space parameterizing all possible iso-trivial degenerations of that point. When the stack is BG for a reductive G, this recovers the spherical building of G, and when the stack is X/T for a toric variety X, this recovers the fan of X.'}
            ,
            {date:new Date('2014','09','13'),
                        name:'Melody Chan',
                        school: 'Harvard',
                        title:'Topology of the tropical moduli spaces M_{1,n} and M_{2,n}',
                        abs:'The moduli space of n-marked, genus g tropical curves is a cell complex that was identified in work of Abramovich-Caporaso-Payne with the boundary complex of the complex moduli space M_{g,n}. It also has connections to many other important geometric objects: for example, if g=0, it is the Billera-Holmes-Vogtmann space of phylogenetic trees, while if n=0, it is a compactified quotient of Culler-Vogtmann Outer space. In this talk, I will give new results on the topology of tropical M_{1,n} and M_{2,n}, obtaining as corollaries new calculations of the top-weight cohomology of the complex moduli spaces M_{1,n} and M_{2,n}. Joint work, in part, with Galatius and Payne.'}
                        ,
                        {date:new Date('2014','09','31'),
                                    name:'Siu-Cheong Lau',
                                    school: '',
                                    title:'A constructive approach to homological mirror symmetry',
                                    abs:'Homological mirror symmetry conjecture asserts an equivalence between the derived Fukaya category and the derived category of coherent sheaves of the mirror. In this talk I will explain a geometric construction of mirror based on SYZ and Lagrangian deformation theory. The construction always comes with a natural functor, which explains why homological mirror symmetry follows from construction.'}
              ,
              {date:new Date('2014','10','03'),
                          name:'Pablo Solis',
                          school: 'Caltech',
                          title:'Compactification of Algebraic Groups and Moduli Spaces',
                          abs:'Many important varieties in algebraic geometry come in some way from algebgraic groups. Examples include Abelian varieties, toric varieties, flag varieties or more generally spherical varieties. An important example of the latter is the so called wonderful compactification of a semisimple adjoint group. In this talk I will discuss a compactification of a Kac-Moody group associated to a loop group that in many ways generalized the wonderful compactification of a semisimple group. Time permitting I\'ll discuss application to the moduli of principal bundles on a curve.'}
                          ,
                          {date:new Date('2014','10','10'),
                                      name:'Atoshi Chowdhury',
                                      school: 'UC Berkeley',
                                      title:'Stability of line bundles on reducible varities',
                                      abs:'Over a family of varieties in which some fibers are singular, the relative Picard stack (the moduli space of line bundles) may fail to be compact. I\'ll discuss an asymptotic stability condition aimed at compactifying it, which generalizes the GIT stability condition used in the 1990s by Caporaso in compactifying relative Picard schemes over families of curves. I\'ll give some results on counting semistable line bundles on reducible varieties of arbitrary dimension with ample or anti-ample canonical bundle, as well as similar results over degenerate K3 surfaces of Type II. I\'ll also discuss some open questions related to constructing proper moduli spaces using semistable line bundles. '}
                                      ,
                          {date:new Date('2014','10','17'),
                                      name:'Chris Manon',
                                      school: 'George Mason U.',
                                      title:'Moduli spaces of principal bundles and compactifications of character varieties',
                                      abs:'For $C$ a smooth projective curve, and $G$ a simple, simply connected complex group, let $M_C(G)$ be the moduli space of semistable $G-$principal bundles on $C$. As the curve $C$ moves in the moduli $\\mathcal{M}_g$ of smooth curves, the spaces $M_C(G)$ are known to define a flat family of schemes, and this family can be extended to the Deligne-Mumford compactification $\\bar{\\mathcal{M}}_g$. We describe the geometry of the fibers of this family which appear at the stable boundary, in particular we discuss a recent result which shows that the fibers over maximally singular curves contain an important and ubiquitous moduli space, the free group character variety $\\mathcal{X}(F_g, G),$ as a dense, open subspace. This latter space is a moduli space of representations of $F_g$ in $G$, and naturally appears as an object of interest in Teichm\\"uller theory, the theory of geometric structures, and the theory of Higgs bundles. We will also discuss the structure of the coordinate ring of $M_C(G)$, and features of the resulting compactification of the character variety when $G = SL_2(\\C)$. '}
                                      ,
                                      {date:new Date('2014','11','01'),
                                                  name:'Laura Schaposnik',
                                                  school: 'Urbana Champaign',
                                                  title:'Higgs bundles, spectral data, and applications ',
                                                  abs:'A Higgs bundles (introduced by N. Hitchin in 1987) is a pair of a holomorphic vector bundle and a holomorphic 1-form taking values in the endomorphisms of the bundle. The moduli space of Higgs bundles carries a natural Hyperkahler structure, through which we can study Lagrangian subspaces (A-branes) or holomorphic subspaces (B-branes) with respect to each structure. Notably, these A and B-branes have gained significant attention in string theory. We shall begin the talk by first introducing Higgs bundles for complex Lie groups and the associated Hitchin fibration, and recalling how to realize Langlands duality through spectral data. We shall then look at a natural construction of families of subspaces which give different types of branes. Finally, by means of spectral data, we shall relate these branes to the study of 3-manifolds, surface group representations. We shall conclude with some conjectures related to Langlands duality '}

    ]
}

,

{type:'Algebraic Geometry Learning',
time:'TBD',
days:'TBD',
location:'TBD',
year:2015,
quarter:'Fall',
description:'',
speakers:[{date:new Date('2014','10','08'),
            name:'n',
            title:'t',
            abs:'abstract'},
            {date:new Date('2014','10','08'),
            name:'n',
            title:'t',
            abs:'abstract'}]
},

{type:'Algebraic Geometry Learning',
time:'3 pm',
days:'Monday',
location:'153 Sloan',
year:2014,
quarter:'Winter',
description:'Algebraic Groups',
speakers:[{date:new Date('2015','00','19'),
            name:'Seunghee',
            title:'Group actions on Schemes',
            abs:'In this talk, we will go over the definitions of group schemes and a group action on a algebraic variety. We start by reviewing the case of a group acting on a set. We will then generalize the ideas to group actions on algebraic varieties. For a group action we can also define an orbit space, categorical quotient, stabilizer etc. Categorical quotients preserve several nice properties such as irreducibility, connectedness, and reducedness. We will also define what it means for a group action to be closed, separated, and proper.'},
            {date:new Date('2015','00','26'),
            name:'Jake',
            title:'Actions of reductive groups on affine schemes',
            abs:'We begin our analysis of actions on algebraic varieties by reductive groups. After introducing the Reynolds operator, the focus of the talk will lie primarily in the case of actions on affine schemes. In particular, we prove the existence, universality, and affineness of the categorical quotient in this case. Further, we will see that if the action is closed, this categorical quotient is in fact a geometric quotient. Time permitting, we will begin the discussion on linearization.'}
            ,
            {date:new Date('2015','01','02'),
            name:'Corina',
            title:'G-linearizaton of a line bundle',
            abs:'We begin by introducing the notion of a G-linealization of an invertible sheaf L on X, where G is an algebraic group acting on X. We then proceed by understanding this linearization as a lift to a "bundle action" on the corresponding line bundle. We next introduce the notion of an induced dual action and realize the G-linearized invertible sheaves as an abelian group. Time permitting, we\'ll talk about the case when a sheaf has at most one linearization.'}
            ,
            {date:new Date('2015','01','09'),
            name:'Daniel',
            title:'The numerical criterion: statement and examples',
            abs:'None.'}
            ,
            {date:new Date('2015','01','16'),
            name:'Jim',
            title:'The numerical criterion: proof',
            abs:'None.'}
            ,
            {date:new Date('2015','01','23'),
            name:'Emad',
            title:'Moduli of elliptic curves over \\Z',
            abs:'None.'},
            {date:new Date('2015','02','03'),
            name:'Brian',
            title:'Moment maps',
            abs:'None.'}

            ]
},

{type:'Algebraic Geometry Learning',
time:'???',
days:'???',
location:'153 Sloan',
year:2014,
quarter:'Fall',
description:'Algebraic Groups',
speakers:[
          {date:new Date('2014','09','16'),
                      name:'Seunghee',
                      title:'Intro to Algebraic Groups',
                      abs:'Algebraic groups are the group objects in the category of varieties. We will define what we mean by varieties, morphisms of varieties and group objects in a category. We will also take a look at examples of algebraic groups including \\mathbb{G}_a, \\mathbb{G}_m, GL_n(K), and elliptic curves.'},
                      {date:new Date('2014','09','23'),
                      name:'Emad',
                      title:'Hopf Algebras',
                      abs:'Affine varieties are defined by zero set of polynomials with n variables in k^n, where k is an algebraically closed field. Morphisms of the category of varieties are defined by maps that pull back regular functions to regular functions. In the case of affine varieties one can recover the variety (as an object in the category of varieties) from the ring of regular functions (ring structure being product and addition of functions) on it. The group structure of an affine algebraic group translates to a co-algebra structure(and two k-algebra morphisms) on the ring of regular functions. This coalgebra structure together with the algebra structure of the ring of regular functions defines a commutative Hopf algebra. Category of affine algebraic groups is dual to the category commutative Hopf algebras(with some finiteness properties). One can generalize affine algebraic groups by Hopf algebras to define affine group schemes. We define Hopf algebras and study some basic properties of them. '}
                      ,

            {date:new Date('2014','10','06'),
            name:'Andrei',
            title:'Cartier Duality',
            abs:'None.'},
            {date:new Date('2014','10','13'),
            name:'Edward',
            title:'the Lie algebra of an algebraic group',
            abs:'None.'},
            {date:new Date('2014','10','20'),
            name:'Nathan',
            title:'rational points on elliptic curves I',
            abs:'None.'},
            {date:new Date('2014','10','20'),
            name:'Corina',
            title:'rational points on elliptic curves II',
            abs:'None.'}

            ]

}
];



$scope.classes = [
{name:'Math 130a',
when:'Fall 2015',
time:'MWF 1pm',
where: '153 Sloan',
description:'This is a first course in algebraic geometry. Topics include: classical affine and projective varieties, morphisms, rational maps, smoothness, curves. Some scheme theory will be covered.',
textbook:'Hartshorne: Algebraic Geometry',
resources:'some',
psets:[{name:1,date:'date',link:'link'},{name:2,date:'date',link:'link'}]
},
{name:'Math 120a',
when:'Fall 2015',
time:'MWF 9am',
where:'153 Sloan',
description:'This is first course in algebra and will be primarily focused on commutative algebra including rings, ideals, modules, tensor products, hom, ext, tor, localization, flatness, primary decomposition, DVRs and Dedekind domains.',
textbook:'Atiyah,MacDonald: Introduction to Commutative Algebra',
resources:'some',
psets:[{name:1,date:'date',link:'link'},{name:2,date:'date',link:'link'}]
}
,
{name:'Math 130b',
when:'Winter 2015',
time:'Tuesday 4-5:30, Thursday 4:30-6',
where:'153 Sloan',
description:' This course will continue with the theory of schemes. We will go into more detail on properties of morphisms of schemes and also discuss sheaves of modules. We will discuss divisors and differentials and see how this theory works for curves. We will also discuss the preliminary ideas of cohomology and discuss Serre Duality and Riemann-Roch for curves. ',
textbook:'Hartshorne: Algebraic Geometry',
resources:'some',
psets:[{name:1,date:'date',link:'link'},{name:2,date:'date',link:'link'}]
},
{name:'Math 130a',
when:'Fall 2014',
time:'MWF 1pm',
where:'257 Sloan',
description:'This is a first course in algebraic geometry. Topics include: classical affine and projective varieties, morphisms, rational maps, smoothness, curves. Some scheme theory will be covered.',
textbook:'Hartshorne: Algebraic Geometry',
resources:'some',
psets:[{name:1,date:'date',link:'link'},{name:2,date:'date',link:'link'}]
},
];

}

]
);
