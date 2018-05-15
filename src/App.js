import React, { Component } from 'react';
import './index.css';
import logo from './petsLogo.svg';
import heroImg from './heroImg.jpg';
import TitleBar from './components/TitleBar.js';
import Products from './components/Products.js';
import Category from './components/Category.js';


class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [
              	{
              		"name" : "Spiderman Dog",
                  "url": "https://sep.yimg.com/ay/entirelypets/spider-man-dog-costume-medium-1.jpg",
              		"price" : "$16.99",
              		"category" : "Dog"
              	},
                {
                  "name" : "AminAvast Kidney Support for Cats",
                  "url": "https://sep.yimg.com/ay/entirelypets/aminavast-kidney-support-for-cats-60-capsules-3.jpg",
                  "price" : "$22.99",
                  "category" : "Cat"
                },
                {
                	"name" : "CET Enzymatic Chews Petite",
                  "url": "https://sep.yimg.com/ay/entirelypets/cet-chews-for-small-dogs-30-chews-30.jpg",
                	"price" : "$15.99",
                	"category" : "Dog"
                },
                {
                	"name" : "CET Enzymatic Chews Medium",
                  "url": "  https://sep.yimg.com/ay/entirelypets/cet-chews-for-medium-dogs-30-chews-31.jpg",
                	"price" : "$19.99",
                	"category" : "Dog"
                },
                {
                	"name" : "CET Enzymatic Chews X-Large",
                  "url": "https://sep.yimg.com/ay/entirelypets/cet-chews-for-x-large-dogs-30-chews-42.jpg",
                	"price" : "$31.99",
                	"category" : "Dog"
                },
                {
                	"name" : "Salmon Snacks",
                  "url": "https://sep.yimg.com/ay/entirelypets/snack-21-salmon-snacks-for-dogs-25-g-1.jpg",
                	"price" : "$2.99",
                	"category" : "Dog"
                },
                {
                	"name" : "Cosequin",
                  "url": "https://sep.yimg.com/ay/entirelypets/cosequin-for-cats-80-capsules-27.jpg",
                	"price" : "$2.99",
                	"category" : "Cat"
                },

                {
                	"name" : "Wellness Cat Food - Turkey & Salmon ",
                  "url": "https://sep.yimg.com/ay/entirelypets/wellness-cat-food-turkey-salmon-5-5-oz-21.jpg",
                	"price" : "$2.99",
                	"category" : "Cat"
                },



            ],
            search: '',
            category: '',
            sort: ''
        };
    }

    componentDidMount() {
      this.updateSearch(this.state.search);
    };

    resetAll(term) {
      this.setState({
        search: '',
        category: '',
        sort: ''
      });
    }

    updateSearch(term) {

      this.setState({
        search: term
      });
    }

    updateCategory(term) {
        this.setState({
          category: term
        });
    }

    updateSortCategory(term) {
        let products = this.state.products;

        if (term === 'low')
        {
          products.sort(
            function(a,b) {
              return a.price.replace(/[^0-9.]/g, "")
              - b.price.replace(/[^0-9.]/g, "");
            });
        }
        else if (term === 'high')
        {
          products.sort(
            function(a,b) {
              return b.price.replace(/[^0-9.]/g, "")
               - a.price.replace(/[^0-9.]/g, "");
            });
        }

        this.setState({
          sort: term,
          products: products
        });
    }

      render() {

        console.log(this.state);

        let filteredData = this.state.products.filter(
          (product) => {
            if (this.state.category !== "")
            {
                return product.name
                        .toLowerCase()
                        .indexOf(this.state.search.toLowerCase()) !== -1
                        && product.category === this.state.category;
            }
            else {
                return product.name
                      .toLowerCase()
                      .indexOf(this.state.search.toLowerCase()) !== -1
            }

          }
        );

        return (
          <div>
              <TitleBar
                logo={logo}
                heroImg={heroImg}
                onSearchTermChange={term => this.updateSearch(term)}
                >
              </TitleBar>
              <Category
                onCategoryChange={term => this.updateCategory(term)}
                onSortChange={term => this.updateSortCategory(term)}
                resetAll={term => this.resetAll(term)}
              />
              <Products products={filteredData} />

          </div>
        )
      }
    }

export default App;
